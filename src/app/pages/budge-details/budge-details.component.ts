import { State } from '../../state/state.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { generateToDos, ToDo } from '../../state/todo/todo.model';
import { AddToDo, CompleteToDo, IncompleteToDo } from '../../state/todo/todo.actions';
import { completeToDos, incompleteToDos } from '../../state/todo';
import { ActivatedRoute } from '@angular/router';
import companies from '../../../assets/config/companies-info.json';
import { BudgeInfoClassic } from '../../models/budge-info';

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
  infoUser: Array<BudgeInfoClassic>;
  public companies:{company_name:string, url_website:string, url_logo:string}[] = companies;
  budgeInfos = new BudgeInfoClassic("", "", 0, 0);

  constructor(private store: Store<State>, private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this._router
      .data
      .subscribe(data => {
        this.type = data.type_name;
        this.icon = data.icon_name;
      });
    this.infoUser = JSON.parse(localStorage.getItem('budgeInfo'));
    this.budgeInfos = this.infoUser.filter(x => x.type == this.type)[0];

    generateToDos().forEach(todo => this.store.dispatch(new AddToDo(todo)));
    this.completeToDos = this.store.pipe(select(completeToDos));
    this.incompleteToDos = this.store.pipe(select(incompleteToDos));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  saveBudgeInfos() {
    this.infoUser = this.infoUser.filter(x => x.type != this.type)
    var infoUserToSend = {
      type: this.budgeInfos.type,
      company_name: this.budgeInfos.company_name,
      sampling_day: this.budgeInfos.sampling_day,
      price: this.budgeInfos.price
    };
    this.infoUser.push(infoUserToSend);
    localStorage.setItem('budgeInfo', JSON.stringify(this.infoUser));
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
}
