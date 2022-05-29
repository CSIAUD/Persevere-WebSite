import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TeamComponent } from './pages/team/team.component';
import { InstallationsComponent } from './pages/installations/installations.component';
import { WorkComponent } from './pages/prestations/work/work.component';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { DocumentComponent } from './pages/gestion/document/document.component';
import { StagesComponent } from './pages/prestations/stages/stages.component';
import { ProdComponent } from './pages/prestations/prod/prod.component';
import { PhiloComponent } from './pages/philo/philo.component';
import { PWorkComponent } from './pages/philo/p-work/p-work.component';
import { PNaturalComponent } from './pages/philo/p-natural/p-natural.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    TeamComponent,
    InstallationsComponent,
    WorkComponent,
    PrestationsComponent,
    GestionComponent,
    DocumentComponent,
    StagesComponent,
    ProdComponent,
    PhiloComponent,
    PWorkComponent,
    PNaturalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
