import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact/contact';
import { environment } from 'src/environments/environment';

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
  selector: 'app-g-contact',
  templateUrl: './g-contact.component.html',
  styleUrls: ['./g-contact.component.css']
})
export class GContactComponent implements OnInit {

  constructor() { }


  contacts: Array<Contact> = [];
  error = null;

  async ngOnInit() {
    try {
      const contacts = await fetch(environment.apiURL+'/api/contacts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(checkStatus)
        .then(parseJSON);
      for(let contact of contacts.data){
        console.log(contact);
        let contactTemp = new Contact;
        // console.log(contact);
        contactTemp.fullName = contact['attributes']['firstName'] + (contact['attributes']['lastName'] != null ? " " + contact['attributes']['lastName']:"");
        contactTemp.id = contact['id'];
        contactTemp.subject = contact['attributes']['subject'];
        contactTemp.message = contact['attributes']['message'];
        contactTemp.mail = contact['attributes']['email'];
        this.contacts.push(contactTemp);
      }
      // console.log(this.contacts);
    } catch (error) {
      console.log("Erreur fetch")
      // this.error = error;
    }
  }

  async delete(id: number){
    console.log(id);
    try {
      await fetch(environment.apiURL + '/api/contacts/'+id, {
        method: 'DELETE'
      })
        .then(checkStatus)
        .then(parseJSON);
    } catch (error) {
      // this.error = error
    }
  }
}
