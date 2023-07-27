import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceComponent } from './pages/service/service.component';
import { InstaComponent } from './pages/insta/insta.component';
import { LoginComponent } from './pages/login/login.component';
import { Login1Component } from './pages/login1/login1.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { BasictsComponent } from './pages/basicts/basicts.component';
import { IfelseComponent } from './pages/ifelse/ifelse.component';
import { NgstyleComponent } from './pages/ngstyle/ngstyle.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { NavbarComponent } from './pages/navbar/navbar.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'service',component:ServiceComponent
  },
  {
    path:'insta',component:InstaComponent
  },
  {
    path:'login',component:LoginComponent
  } ,
  {
    path:'login1',component:Login1Component
  },
  {
    path:'animation',component:AnimationComponent
  },
  {
    path:'basicts',component:BasictsComponent
  },
  {
    path:'ifelse',component:IfelseComponent
  }
  ,{
    path:'ngstyle',component:NgstyleComponent
  },
  {
    path:'pipes',component:PipesComponent
  },
  {
    path:'navbar',component:NavbarComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
