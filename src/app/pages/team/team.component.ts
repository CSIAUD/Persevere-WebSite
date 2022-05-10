import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    firstSectionHeight();
    resizeImages();
  }

}

window.addEventListener("resize", resizeImages);

function firstSectionHeight(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    let header = document.querySelector("#menu")?.getBoundingClientRect();
    let topDiv = document.querySelector("main>section:first-of-type");

    if(topDiv != null && header != null){
      (topDiv as HTMLElement).style.height = "calc(100vh - "+header.height+"px)"
    }
  }
}

function resizeImages() {
  let imgs = document.querySelectorAll("#team>div:not(:first-child)>img");
  imgs.forEach(img => {
    (img as HTMLElement).style.height = (img.getBoundingClientRect().width).toString() + "px";
  });
}