import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgProgressModule } from 'ngx-progressbar';

@NgModule({
  imports: [ PagesRoutingModule , FormsModule ,NgProgressModule],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ]
  

})
export class PagesModule { }
