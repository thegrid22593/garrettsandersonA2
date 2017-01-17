import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-router/routing.module';

import {WpService} from './services/wp-service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WorkComponent } from './work/work.component';
import { HireMeComponent } from './hire-me/hire-me.component';
import { HomeComponent } from './home/home.component';
import { WorkDetailComponent } from './work/work-detail/work-detail.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkComponent,
    HireMeComponent,
    HomeComponent,
    WorkDetailComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
