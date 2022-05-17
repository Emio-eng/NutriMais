import { RequererConsultasComponent } from './views/requerer-consultas/requerer-consultas.component';
import { FeedComponent } from './views/feed/feed.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './views/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'singup',
    component:SignUpComponent
  },
  {
    path:'feed',
    component:FeedComponent
  },
  {
    path:'consulta',
    component: RequererConsultasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
