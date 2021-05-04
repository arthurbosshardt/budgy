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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { BudgeRecapComponent } from './components/budge-recap/budge-recap.component';
import { BudgeDetailsComponent } from './pages/budge-details/budge-details.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StateModule } from './state/state.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { TodoComponent } from './components/todo/todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: HubComponent, data : {type_name : 'Accueil', icon_name: 'home'}},
  { path: 'user', component: UserComponent, data : {type_name : 'Page utilisateur', icon_name: 'user'}},
  { path: 'assurance-voiture', component: BudgeDetailsComponent, data : {type_name : 'Assurance auto', icon_name: 'directions_car'}},
  { path: 'assurance-habitation', component: BudgeDetailsComponent, data : {type_name : 'Assurance habitation', icon_name: 'home'}},
  { path: 'assurance-sante', component: BudgeDetailsComponent, data : {type_name : 'Assurance santé', icon_name: 'healing'}},
  { path: 'mutuelle-sante', component: BudgeDetailsComponent, data : {type_name : 'Mutuelle santé', icon_name: 'people'}},
  { path: 'fournisseur-internet', component: BudgeDetailsComponent, data : {type_name : 'Fournisseur internet', icon_name: 'wifi'}},
  { path: 'fournisseur-gaz', component: BudgeDetailsComponent, data : {type_name : 'Fournisseur gaz', icon_name: 'whatshot'}},
  { path: 'fournisseur-electricite', component: BudgeDetailsComponent, data : {type_name : 'Fournisseur électricité', icon_name: 'flash_on'}},
  { path: 'fournisseur-eau', component: BudgeDetailsComponent, data : {type_name : 'Fournisseur eau', icon_name: 'waves'}},
]

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    UserComponent,
    BudgeComponent,
    BudgeRecapComponent,
    BudgeDetailsComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSelectModule,
    MatRippleModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StateModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  exports: [ MatFormFieldModule, MatInputModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
