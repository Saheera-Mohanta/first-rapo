import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './common/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceComponent } from './pages/service/service.component';
import { LoginComponent } from './pages/login/login.component';
import { Login1Component } from './pages/login1/login1.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { BasictsComponent } from './pages/basicts/basicts.component';
import { IfelseComponent } from './pages/ifelse/ifelse.component';
import { NgstyleComponent } from './pages/ngstyle/ngstyle.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { MypipePipe } from './mypipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './pages/navbar/navbar.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    ServiceComponent,
    LoginComponent,
    Login1Component,
    AnimationComponent,

    BasictsComponent,
    IfelseComponent,
    NgstyleComponent,
    PipesComponent,
    MypipePipe,
    NavbarComponent,
  




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
