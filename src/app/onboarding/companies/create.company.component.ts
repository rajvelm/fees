import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import { Http,HttpModule,Response,RequestOptions } from '@angular/http'

import { Company } from './company';
 

@Component({
  selector: 'app-create-company',
  templateUrl: './create.company.component.html',
  styleUrls: ['./create.company.component.scss'],
  providers:[]
})
export class CreateCompanyComponent  {
	
	 
	
	 constructor(public _http:Http) {
	 }
	
	/* onAddRow(company) 
   {
    const req = this._http.post('http://localhost:8080/xpress/siteadmin/company', {
    companyName: company.companyName,
	companyLogo : company.companyLogo,
	region: company.region,
	state: company.state,
	country: company.country,
	pincode: company.pincode
    }) */
	
	onSubmit(company)
   {
    const req = this._http.post('http://localhost:8080/xpress/siteadmin/company', {
  "companyId": 0,
  "companyName": company.companyName,
  "companyLogo": company.companyLogo,
  "addressLine1": null,
  "addressLine2": null,
  "addressLine3": null,
  "region": company.region,
  "country": company.country,
  "state": company.state,
  "pincode": company.pincode,
   
  "accounts": [
    
  ],
  "contacts": [
     
  ],
  "agreements": [
     
  ],
  "activeStatus": "A"
})
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

}

