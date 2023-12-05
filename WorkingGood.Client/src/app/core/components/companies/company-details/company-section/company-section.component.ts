import {Component, Input, OnInit} from '@angular/core';
import {CompanyIdentity} from "../../../../models/companies/company.Identity";

@Component({
  selector: 'app-company-section',
  templateUrl: './company-section.component.html',
  styleUrls: ['./company-section.component.css']
})
export class CompanySectionComponent implements OnInit {
  @Input() company?: CompanyIdentity;
  constructor() { }

  ngOnInit(): void {
  }

}
