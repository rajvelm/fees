import { Injectable } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FeesService {
	
	private headers:Headers;
	
    constructor(private _http:Http)
	{
		this.headers= new Headers();
		this.headers.append('Content-Type','application/json');
		this.headers.append('Accept','application/json');
		this.headers.append('Access-Control-Allow-Origin','*');
	}	
	
	
	public getFees(): any
	{
		return this._http.get('http://localhost:8081/fee/getAllExchangeFees')
		.map((response:Response)=>response.json());
	}
}	
     