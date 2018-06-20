import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GridOptions } from "ag-grid";
import {Http,HttpModule,Response,RequestOptions } from '@angular/http'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { single, multi } from '../../shared/chartData';

@Component({
  selector: 'app-config',
  templateUrl: './transformationStep2.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponentStep2 implements OnInit {
  rowData:any;
  closeResult: string;
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
	constructor(private modalService: NgbModal) {

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

    open(content) {
       this.modalService.open(content).result.then((result) => {
         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
     }

     private getDismissReason(reason: any): string {
       if (reason === ModalDismissReasons.ESC) {
         return 'by pressing ESC';
       } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
         return 'by clicking on a backdrop';
       } else {
         return  `with: ${reason}`;
       }
     }

     select(data) {
       console.log('Item clicked', data);
     }

     onLegendLabelClick(entry) {
       console.log('Legend clicked', entry);
     }

}
