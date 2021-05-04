import { State } from '../../state/state.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { generateToDos, ToDo } from '../../state/todo/todo.model';
import { AddToDo, CompleteToDo, IncompleteToDo } from '../../state/todo/todo.actions';
import { completeToDos, incompleteToDos } from '../../state/todo';
import { ActivatedRoute } from '@angular/router';
import companies from '../../../assets/config/companies-info.json';

@Component({
  selector: 'app-budge-details',
  templateUrl: './budge-details.component.html',
  styleUrls: ['./budge-details.component.less']
})
export class BudgeDetailsComponent implements OnInit {
  oldBudgeFormReadOnly: FormGroup;
  newBudgeForm: FormGroup;
  type: string;
  icon: string;
  completeToDos: Observable<Array<ToDo>>;
  incompleteToDos: Observable<Array<ToDo>>;
  private _toDo: Partial<ToDo>;
  sub: any;
  public companies:{company_name:string, url_website:string, url_logo:string}[] = companies;
  selectedCompany = this.companies[0].company_name;

  constructor(private _formBuilder: FormBuilder, private store: Store<State>, private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this._router
      .data
      .subscribe(data => {
        this.type = data.type_name;
        this.icon = data.icon_name;
      });

    generateToDos().forEach(todo => this.store.dispatch(new AddToDo(todo)));
    this.completeToDos = this.store.pipe(select(completeToDos));
    this.incompleteToDos = this.store.pipe(select(incompleteToDos));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addToDo() {
    this.store.dispatch(new AddToDo({
      id: Math.random(),
      complete: false,
      task: this._toDo.task
    }));
  }

  onAddToDoChange(toDo: Partial<ToDo>) {
    this._toDo = toDo;
  }

  onCompleteToDo(toDo: ToDo) {
    this.store.dispatch(new CompleteToDo(toDo));
  }

  onIncompleteToDo(toDo: ToDo) {
    this.store.dispatch(new IncompleteToDo(toDo));
  }

  selectCompany(event: Event) {
    this.selectedCompany = (event.target as HTMLSelectElement).value;
  }
}
