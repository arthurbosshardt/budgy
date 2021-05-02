import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budge-info',
  templateUrl: './budge-info.component.html',
  styleUrls: ['./budge-info.component.less']
})
export class BudgeInfoComponent implements OnInit {
  @Input() company: string;
  @Input() price: number;

  constructor() { }

  ngOnInit(): void {
  }

}
