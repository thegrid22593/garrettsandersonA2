import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-router/routing.module';
import { SwiperModule } from '../../node_modules/angular2-useful-swiper';

import {WpService} from './services/wp-service';
import {NodeService} from './services/node.service';
import {NgsRevealModule} from 'ng2-scrollreveal';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WorkComponent } from './work/work.component';
import { HireMeComponent } from './hire-me/hire-me.component';
import { HomeComponent } from './home/home.component';
import { WorkDetailComponent } from './work/work-detail/work-detail.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { AddTestimonialComponent } from './admin/add-testimonial/add-testimonial.component';
import { AdminSplashComponent } from './admin/admin-splash/admin-splash.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { EmailsComponent } from './admin/emails/emails.component';

import {WorkDirective} from './directives/work-directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkComponent,
    HireMeComponent,
    HomeComponent,
    TestimonialsComponent,
    WorkDetailComponent,
    FooterComponent,
    AdminComponent,
    AddProjectComponent,
    AddTestimonialComponent,
    AdminSplashComponent,
    ProjectsComponent,
    EmailsComponent,
    WorkDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SwiperModule,
    NgsRevealModule.forRoot()
  ],
  providers: [
    WpService,
    NodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
