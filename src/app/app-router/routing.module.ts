import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { HireMeComponent } from '../hire-me/hire-me.component';
import { WorkDetailComponent } from '../work/work-detail/work-detail.component';
import { WorkComponent } from '../work/work.component';
import { AdminComponent } from '../admin/admin.component';
import {AddProjectComponent} from '../admin/add-project/add-project.component';
import {ProjectsComponent} from '../admin/projects/projects.component';
import {AddTestimonialComponent} from '../admin/add-testimonial/add-testimonial.component';
import {AdminSplashComponent} from '../admin/admin-splash/admin-splash.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'hire-me',
    component: HireMeComponent
  },
  {
    path: 'about',
    component: HireMeComponent
  },
  {
    path: 'work/:slug',
    component: WorkDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminSplashComponent,
        pathMatch: 'full'
      },
      {
        path: 'projects',
        pathMatch: 'full',
        component: ProjectsComponent
      },
      {
        path: 'add-testimonial',
        pathMatch: 'full',
        component: AddTestimonialComponent
      }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
