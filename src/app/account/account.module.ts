import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes = [
  // { path: '', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
]
@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
  ],
  exports : [
    RouterModule
  ]
})
export class AccountModule { }
