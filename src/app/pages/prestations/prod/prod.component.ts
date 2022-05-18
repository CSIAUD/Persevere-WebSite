import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let tracteur = document.querySelector("#tracteur");
    if(tracteur)
    (tracteur as HTMLElement).style.height = (tracteur.getBoundingClientRect().width*(373/513)).toString() + "px";
    let champ = document.querySelector("#champ");
    if(champ)
    (champ as HTMLElement).style.height = (champ.getBoundingClientRect().width*(610/423)).toString() + "px";
  }

}
