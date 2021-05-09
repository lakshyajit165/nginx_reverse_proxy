import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home/welcome'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'welcome', component: LandingComponent, 
      },
      {
        path: 'section1', component: Section1Component, 
      },
      {
        path: 'section2', component: Section2Component
      }
      
    ]  

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
