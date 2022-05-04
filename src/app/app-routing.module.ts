import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full"},
  { path: "team", redirectTo: "landing" },
  { path: "installations", redirectTo: "landing" },
  { path: "prestations", redirectTo: "landing" },
  { path: "philo", redirectTo: "landing" },
  { path: "withus",  redirectTo: "landing" },
  { path: "contact",  redirectTo: "landing" },
  // { path: "landing", component: LandingComponent },
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
