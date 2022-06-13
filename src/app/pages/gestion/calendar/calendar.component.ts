import { Component, OnInit } from '@angular/core';

// import {FullCalendar} from '/src/assets/js/main.js'; 

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //   document.addEventListener('DOMContentLoaded', function() {
  //     var calendarEl = document.getElementById('calendar');
  //     var calendar = new FullCalendar.Calendar(calendarEl, {
  //       initialView: 'dayGridMonth'
  //     });
  //     calendar.render();
  //   });
  }

}
