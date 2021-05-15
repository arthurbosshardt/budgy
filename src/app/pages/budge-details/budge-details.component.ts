import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import companies from '../../../assets/config/companies-info.json';
import { BudgeInfoClassic } from '../../models/budge-info';
import { NumberFormatStyle } from '@angular/common';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-budge-details',
  templateUrl: './budge-details.component.html',
  styleUrls: ['./budge-details.component.less']
})
export class BudgeDetailsComponent implements OnInit {
  type: string;
  icon: string;
  sub: any;
  infoUser: Array<BudgeInfoClassic>;
  public companies:{company_name:string, types: string[], url_website:string, url_logo:string}[] = companies;
  budgeInfos = new BudgeInfoClassic("", "", 0, 0, new Array<string>(), new Array<string>());
  taskToAdd: string;

  constructor(private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this._router
      .data
      .subscribe(data => {
        this.type = data.type_name;
        this.icon = data.icon_name;
      });


    this.companies = this.companies.filter(company => company.types.includes(this.type));
    this.infoUser = JSON.parse(localStorage.getItem('budgeInfo'));
    this.budgeInfos = this.infoUser.filter(x => x.type == this.type)[0];
    console.log(this.budgeInfos.tasksToDo.length);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  saveBudgeInfos() {
    this.infoUser = this.infoUser.filter(x => x.type != this.type);
    var infoUserToSend = {
      type: this.budgeInfos.type,
      company_name: this.budgeInfos.company_name,
      sampling_day: this.budgeInfos.sampling_day,
      price: this.budgeInfos.price,
      tasksToDo: this.budgeInfos.tasksToDo,
      tasksDone: this.budgeInfos.tasksDone
    };
    console.log(infoUserToSend);
    this.infoUser.push(infoUserToSend);
    localStorage.setItem('budgeInfo', JSON.stringify(this.infoUser));
  }

  addToDo(task: string) {
    this.budgeInfos.tasksToDo.push(task);
    this.saveBudgeInfos();
  }

  addToDone(task: string) {
    this.budgeInfos.tasksDone.push(task);
    this.budgeInfos.tasksToDo = this.budgeInfos.tasksToDo.filter(taskToDo => taskToDo != task);
    this.saveBudgeInfos();
  }

  removeTask(task: string) {
    this.budgeInfos.tasksDone = this.budgeInfos.tasksDone.filter(taskDone => taskDone != task);
    this.saveBudgeInfos();
  }
}
