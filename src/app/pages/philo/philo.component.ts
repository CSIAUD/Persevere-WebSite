import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-philo',
  templateUrl: './philo.component.html',
  styleUrls: ['./philo.component.css']
})
export class PhiloComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    let fisrt = document.querySelector("#first");
    if(fisrt)
    (fisrt as HTMLElement).style.height = (fisrt.getBoundingClientRect().width*(931/1864)/3*2).toString() + "px";
  }

}