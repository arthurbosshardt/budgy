import { Component, Input, OnInit } from '@angular/core';
import { UserComponent } from 'src/app/pages/user/user.component';

@Component({
  selector: 'app-budge',
  templateUrl: './budge.component.html',
  styleUrls: ['./budge.component.less']
})
export class BudgeComponent implements OnInit {
  @Input() isSelected: boolean;
  @Input() isDone: boolean;
  @Input() title: string;
  @Input() maticon: string;
  @Input() description: string;
  @Input() modele: string;
  @Input() editMode: boolean;
  @Input() company: string;
  @Input() type: string;
  price = 40
  
  constructor() { }

  ngOnInit(): void {
  }
}
