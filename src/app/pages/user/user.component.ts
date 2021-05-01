import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
  encapsulation: ViewEncapsulation.None

})
export class UserComponent implements OnInit {
  editMode = false;

  constructor() { }

  ngOnInit(): void {
  }

}
