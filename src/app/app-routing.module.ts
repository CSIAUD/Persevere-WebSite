import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallationsComponent } from './pages/installations/installations.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { WorkComponent } from './pages/work/work.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full"},
  {
    path: "prestations",
    component: PrestationsComponent,
    children: [
      {path: "work", component: WorkComponent}
    ]
  },
  { path: "team", component: TeamComponent },
  { path: "installations", component: InstallationsComponent },
  { path: "philo", component: LandingComponent },
  { path: "withus", component: LandingComponent },
  { path: "contact", component: LandingComponent },
  { path: "landing", component: LandingComponent },
  { path: '**', redirectTo: "landing", pathMatch: "full"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      // scrollOffset: [0, 64],
      useHash: true // [x, y]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
