import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-work',
  templateUrl: './p-work.component.html',
  styleUrls: ['./p-work.component.css']
})
export class PWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    carousselLoop();
  }

}

function carousselLoop() {
  let caroussel = (document.querySelector("#caroussel") as HTMLElement);
  let length = caroussel.children.length-1;
  if(caroussel){
    setTimeout(() => {
      console.log("loop");
      if(caroussel.dataset['nb']){
        let id = parseInt(caroussel.dataset['nb']);
        let center = caroussel.children[id];
        console.log(id);
        id = (id+1>length?0:id+1);
        console.log(id);
        let right = caroussel.children[(id)];
        caroussel.dataset['nb'] = id.toString();

        center.classList.replace('left-0', '-left-full');
        right.classList.replace('left-full', 'left-0');
        setTimeout(() => {
          let left = center;
          left.classList.remove('duration-1000');
          left.classList.replace('-left-full', 'left-full');
          setTimeout(() => {
          left.classList.add('duration-1000');
          }, 100);
        }, 1000);
        carousselLoop();
      }
    }, 2500);
  }
}