import { Component, Input, OnInit } from '@angular/core';
import companies from '../../../assets/config/companies-info.json';

@Component({
  selector: 'app-budge-recap',
  templateUrl: './budge-recap.component.html',
  styleUrls: ['./budge-recap.component.less']
})
export class BudgeRecapComponent implements OnInit {
  @Input() company: string;
  @Input() price: number;
  public companies:{company_name:string, url_website:string, url_logo:string}[] = companies;

  constructor() { }

  ngOnInit(): void {
  }

  getCompanyWebsiteUrl(): string {
    return this.companies.find(item => item.company_name === this.company).url_website;
  }

  getCompanyLogoUrl(): string {
    return this.companies.find(item => item.company_name === this.company).url_logo;
  }
}
