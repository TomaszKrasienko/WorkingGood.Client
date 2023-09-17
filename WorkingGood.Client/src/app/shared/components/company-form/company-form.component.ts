import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CompanyModel} from "../../../core/models/companies/company.Model";

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css', './../../../app.component.css']
})
export class CompanyFormComponent implements OnInit {
  @Input() companyModel: Partial<CompanyModel>={};
  @Input() pageTitle: string = '';
  @Input() hideSubmitButton = false;
  @Output() companyEventEmitter = new EventEmitter<CompanyModel>();
  msg ="";
  constructor() { }

  ngOnInit(): void {
  }

  submit(): void{
    this.companyEventEmitter.emit(this.companyModel as CompanyModel);
  }

  selectFile(event: any){
    if(!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.companyModel.logo = reader.result!.toString();

      console.log(this.companyModel.logo)
    }
  }
}
