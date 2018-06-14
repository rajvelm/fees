import { Injectable } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {
	
	private headers:Headers;
	
    constructor(private _http:Http)
	{
		this.headers= new Headers();
		this.headers.append('Content-Type','application/json');
		this.headers.append('Accept','application/json');
		this.headers.append('Access-Control-Allow-Origin','*');
	}	
	
	
	public getCompanies(): any
	{
		return this._http.get('http://localhost:8080/xpress/siteadmin/companies')
		.map((response:Response)=>response.json());
		
		 
	}
	 
}	
     