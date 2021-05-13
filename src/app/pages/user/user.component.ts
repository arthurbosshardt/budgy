import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BudgeInfoClassic } from 'src/app/models/budge-info';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
  encapsulation: ViewEncapsulation.None

})
export class UserComponent implements OnInit {
  editMode = false;
  infoUser: Array<BudgeInfoClassic>;

  constructor() { }

  ngOnInit(): void {
    this.infoUser = JSON.parse(localStorage.getItem('budgeInfo'));
  }

  getCompanyName(type: string) {
    return this.infoUser.filter(budge => budge.type == type)[0].company_name;
  }

  getPrice(type: string) {
    return this.infoUser.filter(budge => budge.type == type)[0].price;
  }

  getIsDone(type: string) {
    return this.infoUser.filter(budge => budge.type == type)[0].isDone;
  }
}
