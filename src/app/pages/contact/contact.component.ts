import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormBuilder } from '@angular/forms';

const parseJSON = (resp: any) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp: any) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  return parseJSON(resp).then((resp: any) => {
    throw resp;
  });
};
const headers = {
  'Content-Type': 'application/json',
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  data;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.data = this.formBuilder.group({
      message: '',
      lastName: '',
      firstName: '',
      email: '',
      subject: ''
    });
  }

  title = 'angular-app';
  error = null;

  async onSubmit(data: any) {
    console.log("submit");
    console.log(data);
    try {
      let infos = "{\"data\":"+JSON.stringify(data)+"}";
      console.log("==========================");
      console.log(data);
      console.log(infos);
      console.log("==========================");
      await fetch(environment.apiURL + '/api/contacts', {
        method: 'POST',
        headers: headers,
        body: infos,
      })
        .then(checkStatus)
        .then(parseJSON);
    } catch (error) {
      console.log(error);
      // this.error = error
    }
  }
}
