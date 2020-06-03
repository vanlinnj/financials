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
import { ResumeComponent } from './resume/resume.component';
import { AccountRoutingModule } from './account/account-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    LoginComponent,
    AccountComponent,
    RecoverComponent,
    CreateComponent,
    UpdateComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
