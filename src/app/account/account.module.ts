import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { UnAuthGuardService } from '../core/un-auth-guard.service';
import { SharedModule } from '../shared/shared.module';

const routes = [
  { path: 'login', component: LoginComponent, canActivate: [UnAuthGuardService] },
  { path: 'register', component: RegisterComponent, canActivate: [UnAuthGuardService]},
]
@NgModule({
  declarations: [RegisterComponent, LoginComponent, ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    SharedModule
  ],
  exports : [
    RouterModule
  ]
})
export class AccountModule {}
