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
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

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
  // ngOnInit(): void {
  //   firstSectionHeight();
  //   resizeImages();
  // }

}

window.addEventListener("resize", resizeImages);

function firstSectionHeight(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    let header = document.querySelector("#header")?.getBoundingClientRect();
    let topDiv = document.querySelector("main>section:first-of-type");

    if(topDiv != null && header != null){
      // (topDiv as HTMLElement).style.height = "calc(100vh - "+header.height+"px)";
      (topDiv as HTMLElement).style.marginTop = header.height+"px)";
    }
  }
}

function resizeImages() {
  let imgs = document.querySelectorAll("#team>div:not(:first-child)>img");
  let video = document.querySelector("iframe");
  imgs.forEach(img => {
    (img as HTMLElement).style.height = (img.getBoundingClientRect().width).toString() + "px";
  });
  if(video != null){
    (video as HTMLElement).style.height = (video.getBoundingClientRect().width*(9/16)).toString() + "px";
  }
}