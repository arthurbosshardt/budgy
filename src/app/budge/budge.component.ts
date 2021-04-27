import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budge',
  templateUrl: './budge.component.html',
  styleUrls: ['./budge.component.less']
})
export class BudgeComponent implements OnInit {
  @Input() isChecked: boolean;
  @Input() title: string;
  @Input() maticon: string;
  @Input() description: string;
  @Input() modele: string;
  color: string = "rgba(0, 0, 0, 0.10)";

  constructor() { }

  ngOnInit(): void {
  }
}
