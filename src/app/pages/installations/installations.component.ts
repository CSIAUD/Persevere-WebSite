import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Installation } from 'src/app/model/installation/installation';
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

@Component({
  selector: 'app-installations',
  templateUrl: './installations.component.html',
  styleUrls: ['./installations.component.css']
})
export class InstallationsComponent implements OnInit {

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
      }
      // NavigationStart
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  installations: Array<Installation> = [];
  error = null;

  async ngOnInit() {
    try {
      const installations = await fetch(environment.apiURL+'/api/installations?populate=*&sort[0]=order%3Aasc', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(checkStatus)
        .then(parseJSON);
      for(let installation of installations.data){
        // console.log(installation);
        let installationTemp = new Installation;
        // console.log(installation);
        installationTemp.name = installation['attributes']['name'];
        installationTemp.image = environment.apiURL + installation['attributes']['image']['data']['attributes']['url'];
        installationTemp.options = installation['attributes']['options'];
        installationTemp.id = installation['id'];
        this.installations.push(installationTemp);
      }
      // console.log(this.installations);
    } catch (error) {
      console.log("Erreur fetch")
      // this.error = error;
    }
  }


  // ngOnInit(): void {
  //   sizeDivs();
  //   init();
  // }
  closePopup(){
    let popup = document.getElementById("popup");
    popup?.classList.add("hidden");
  }

}

function init(){
  let popup = document.getElementById("popup");
  let instals = document.querySelectorAll("#installs>div");
  console.log(instals);
  instals.forEach(install => {
    install.addEventListener('click', (e) => displayImg(e))
  });

  window.addEventListener('resize', sizeDivs);
}


function sizeDivs(){
  let instals = document.querySelectorAll("#installs>div");
  instals.forEach(install => {
    let full = install.getBoundingClientRect();
    let img = install.children[0].getBoundingClientRect();
    (install.children[1] as HTMLElement).style.height = (full.height-img.height) + "px"
  });
}

function displayImg(e: any){
  let popup = document.getElementById("popup");
  let popupIMG = document.getElementById("popup-img");
  let popupTXT = document.getElementById("popup-txt");
  let popupTITLE = document.getElementById("popup-title");
  let target = e.target;

  while(target.parentElement.id != "installs"){
    target = target.parentElement;
  }
  popup?.classList.remove("hidden");
  let img = target.querySelector("img").attributes.src.value;
  let title = target.querySelector("h3").innerText;
  let text = target.querySelector("p").innerText;

  (popupIMG as HTMLImageElement).src = img;
  (popupTXT as HTMLElement).innerText = text;
  (popupTITLE as HTMLElement).innerText = title;

}