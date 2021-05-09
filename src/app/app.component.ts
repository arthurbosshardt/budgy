import { Component, OnInit } from '@angular/core';
import infoUser from '../assets/config/info-user.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  title = 'budgy';
  public infoUser:{type:string, company_name:string, sampling_day:number, price:number}[] = infoUser;

  ngOnInit(): void {
    localStorage.setItem('budgeInfo', JSON.stringify(infoUser));
  }
}
