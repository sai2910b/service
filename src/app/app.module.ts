import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesComponent } from './employees/employees.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import {RouterModule, Routes,} from '@angular/router';
import { UserComponent } from './user/user.component';

const routes:Routes=[
  {path:'',redirectTo:'Employees',pathMatch:'full'},
  {path:'Employees',component:EmployeesComponent},
  {path:'user/:id',component:UserComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'**',redirectTo:'Employees'}

];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AboutComponent,
    ContactComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
