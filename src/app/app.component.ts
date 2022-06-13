import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Ecuries persévère';

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        
        // console.log("on change de page !!!");
        let drops = document.querySelectorAll(".dropDown");

        drops.forEach(
          drop => {
            let ul = drop.querySelector("ul");
            if(ul){
              // console.log(ul);
              if(ul.classList.contains("flex")){
                swapClass((ul as HTMLElement), "flex", "hidden")
              }
              if(ul.classList.contains("opacity-100")){
                swapClass((ul as HTMLElement), "opacity-100", "opacity-0")
              }
            }
          }
        );
      }
      // NavigationStart
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }
}

function swapClass(elem: HTMLElement, class1: string, class2: string) {
  if(elem.classList.contains(class1)){
      elem.classList.replace(class1,class2);
  }else if(elem.classList.contains(class2)){
      elem.classList.replace(class2,class1);
  }
}