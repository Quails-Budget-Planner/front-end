import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { ApiHttpService } from './api-http.service';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { LoggedInService } from './logged-in.service';


const modules = [
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  HttpClientModule,
  MatToolbarModule,
  MatGridListModule,
  FormsModule,
]
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
  providers: [ApiHttpService, AuthGuard, LoggedInService]
})

export class CoreModule { }
