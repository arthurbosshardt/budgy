import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './hub/hub.component';
import { UserComponent } from './user/user.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BudgeComponent } from './budge/budge.component';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '', component: HubComponent },
  { path: 'user', component: UserComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    UserComponent,
    BudgeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatRippleModule,
    MatTabsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
