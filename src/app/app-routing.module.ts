import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { InstallationsComponent } from './pages/installations/installations.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PWorkComponent } from './pages/philo/p-work/p-work.component';
import { PhiloComponent } from './pages/philo/philo.component';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { ProdComponent } from './pages/prestations/prod/prod.component';
import { StagesComponent } from './pages/prestations/stages/stages.component';
import { WorkComponent } from './pages/prestations/work/work.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full"},
  {
    path: "prestations",
    component: PrestationsComponent,
    children: [
      {path: "work", component: WorkComponent},
      {path: "stages", component: StagesComponent},
      {path: "prod", component: ProdComponent}
    ]
  },
  { path: "team", component: TeamComponent },
  { path: "installations", component: InstallationsComponent },
  { 
    path: "philo",
    component: PhiloComponent,
    children: [
      {path: "work", component: PWorkComponent},
      {path: "natural", component: PWorkComponent},
      {path: "cavalier", component: PWorkComponent}
    ]
  },
  { path: "withus", component: LandingComponent },
  { path: "contact", component: LandingComponent },
  { path: "landing", component: LandingComponent },
  { path: '**', redirectTo: "landing", pathMatch: "full"}
];



const routerOptions: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'top',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
