import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AccountModule } from './account/account.module';
import { BudgetsModule } from './budgets/budgets.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './about/person/person.component';



@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, PersonComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      // { path: '', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
    ]),
    AccountModule,
    BudgetsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
