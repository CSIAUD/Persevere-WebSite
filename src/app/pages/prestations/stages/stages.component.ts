import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    resizeImages();
  }

}

function resizeImages() {
  let sep = document.querySelector("#separator");
  let last = document.querySelector("#last");
  if(sep)
  (sep as HTMLElement).style.height = (sep.getBoundingClientRect().width*(500/1224)).toString() + "px";
  if(last)
  (last as HTMLElement).style.height = (last.getBoundingClientRect().width*((715/1481)/2)).toString() + "px";
}