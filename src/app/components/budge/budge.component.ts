import { Component, Input, OnInit } from '@angular/core';
import companies from '../../../assets/config/companies-info.json';

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
  @Input() price: number;
  public companies:{company_name:string, types:string[], url_website:string, url_logo:string}[] = companies;

  constructor() { }

  ngOnInit(): void {
  }

  getCompanyWebsiteUrl(): string {
    return this.companies.find(company => company.company_name === this.company).url_website;
  }

  getCompanyLogoUrl(): string {
    return this.companies.find(company => company.company_name === this.company).url_logo;
  }
}
