import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-router/routing.module';
import { SwiperModule } from '../../node_modules/angular2-useful-swiper';

import {WpService} from './services/wp-service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WorkComponent } from './work/work.component';
import { HireMeComponent } from './hire-me/hire-me.component';
import { HomeComponent } from './home/home.component';
import { WorkDetailComponent } from './work/work-detail/work-detail.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkComponent,
    HireMeComponent,
    HomeComponent,
    WorkDetailComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [WpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
