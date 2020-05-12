import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AccountModule } from './account/account.module';
import { BudgetsModule } from './budgets/budgets.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './about/person/person.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, PersonComponent],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ]),
    AccountModule,
    BudgetsModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
