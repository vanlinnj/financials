import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillsComponent } from './bills/bills.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { RecoverComponent } from './account/recover/recover.component';
import { CreateComponent } from './account/create/create.component';
import { UpdateComponent } from './account/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    LoginComponent,
    AccountComponent,
    RecoverComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
