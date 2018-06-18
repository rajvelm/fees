import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GridOptions } from "ag-grid";
import {Http,HttpModule,Response,RequestOptions } from '@angular/http'

@Component({
  selector: 'app-config',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit {
  rowData:any;
  columnDefs = [
      {headerName: 'Trading Plaform', field: 'tradingPlatform' },
      {headerName: 'User Id', field: 'userId' },
      {headerName: 'Trader Name', field: 'traderName'},
      {headerName: 'Client Name', field: 'clientName' },
      {headerName: 'Market Name', field: 'marketName' },
      {headerName: 'Waiver Type', field: 'waiverType'},
      {headerName: 'User Type', field: 'userType' },
      {headerName: 'Client Account', field: 'clientAccount' },
      {headerName: 'Business Unit', field: 'businessUnit'},
      {headerName: 'Sub Business Unit', field: 'subBusinessUnit' },
      {headerName: 'Team', field: 'team' },
      {headerName: 'Business Unit Account', field: 'businessUnitAccount'}
  ];
	//public rawConfigData:any;
  gridOptions: GridOptions;
	constructor() {

	}

  ngOnInit()
   {
     this.fetch((data) => {
 		  this.rowData = data;
       console.log(this.rowData);
 		});
	}





	// key: string = 'username'; //set default
	// reverse: boolean = true;
	// sort(key){
	// 	this.key = key;
	// 	console.log("reserve:"+this.reverse+this.key);
	// 	this.reverse = !this.reverse;
	// 	console.log("reserve:"+this.reverse);
	// }
  //

    fetch(cb) {
		const req = new XMLHttpRequest();
		req.open('GET', `assets/data/transformedData.json`);

		req.onload = () => {
		  cb(JSON.parse(req.response));
		};

		req.send();
	  }


}
