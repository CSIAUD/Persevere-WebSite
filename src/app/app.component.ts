import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdComponent } from './pages/prestations/prod/prod.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Ecuries persévère';
  constructor() {}

  ngOnInit(): void {
  }

  
}