import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovementListComponent } from './movement-list/movement-list.component';
import { BudgetInfoComponent } from './budget-info/budget-info.component';
import { AccountDataComponent } from './account-data/account-data.component';
import { AccountInfoComponent } from './account-info/account-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MovementListComponent,
    BudgetInfoComponent,
    AccountDataComponent,
    AccountInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
