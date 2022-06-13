import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormArray, FormControl, AbstractControl } from '@angular/forms';

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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  data;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.data = this.formBuilder.group({
      username: '',
      lastName: '',
      firstName: '',
      email: '',
      password: ''
    });
  }

  title = 'angular-app';
  allCategories = [];
  error = null;

  async onSubmit(data: any) {
    console.log("submit");
    console.log(data);
    try {
      await fetch(environment.apiURL + '/api/users', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      })
        .then(checkStatus)
        .then(parseJSON);
    } catch (error) {
      // this.error = error
    }
    this.data.reset();
  }
}
