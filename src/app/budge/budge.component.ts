import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budge',
  templateUrl: './budge.component.html',
  styleUrls: ['./budge.component.less']
})
export class BudgeComponent implements OnInit {
  @Input() title: string;
  @Input() logo: string;
  @Input() description: string;
  @Input() modele: string;

  constructor() { }

  ngOnInit(): void {
  }
}
