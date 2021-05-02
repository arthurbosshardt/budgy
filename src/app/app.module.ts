import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './pages/hub/hub.component';
import { UserComponent } from './pages/user/user.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BudgeComponent } from './components/budge/budge.component';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { BudgeRecapComponent } from './components/budge-recap/budge-recap.component';
import { BudgeDetailsComponent } from './pages/budge-details/budge-details.component';

const routes: Routes = [
  { path: '', component: HubComponent },
  { path: 'user', component: UserComponent },
  { path: 'assurance-voiture', component: BudgeDetailsComponent },
  { path: 'assurance-habitation', component: BudgeDetailsComponent },
  { path: 'assurance-sante', component: BudgeDetailsComponent },
  { path: 'mutuelle-sante', component: BudgeDetailsComponent },
  { path: 'fournisseur-internet', component: BudgeDetailsComponent },
  { path: 'fournisseur-gaz', component: BudgeDetailsComponent },
  { path: 'fournisseur-electricite', component: BudgeDetailsComponent },
  { path: 'fournisseur-eau', component: BudgeDetailsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    UserComponent,
    BudgeComponent,
    BudgeRecapComponent,
    BudgeDetailsComponent
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
