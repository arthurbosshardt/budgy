import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './hub/hub.component';
import { UserComponent } from './user/user.component';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  { path: '', component: HubComponent },
  { path: 'user', component: UserComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
