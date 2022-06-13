import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user/user';
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
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor() { }

  users: Array<User> = [];
  temp = [];
  error = null;

  async ngOnInit() {
    try {
      const users = await fetch(environment.apiURL + '/api/users?populate=* ', {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      for(let user of users){
        let userTemp = new User;
        userTemp.description = user['description'];
        userTemp.fullName = user['firstName'] + (user['lastName'] != null ? " " + user['lastName']:"");
        userTemp.id = user['id'];
        userTemp.job = user['job'];
        userTemp.url = user['url'];

        this.users.push(userTemp);
      }
      console.log(users);
      console.log(this.users);
    } catch (error) {
      // this.error = error;
    }
  }

}
