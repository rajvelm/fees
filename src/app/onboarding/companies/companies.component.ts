import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid";
import {CompanyService} from "./company.service";
import {Company} from "./company";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  providers:[CompanyService]
})
export class CompaniesComponent implements  OnInit{
 
  columnDefs: any;
   rowData: any;
  constructor(public cSer: CompanyService) {
   

      /* this.columnDefs = [
      {
        headerName: "Id",
        field: "connectionId",
        width: 100
      },
      {
        headerName: "Host Id",
        field: "connectionHostId",
        width: 100
      },
        {
          headerName: "Node",
          field: "nodeSide",
          width: 100
        },
        {
          headerName: "Role",
          field: "role",
          width: 100
        },
        {
          headerName: "Physical IP",
          field: "physicalIP",
          width: 100
        },
        {
          headerName: "External IP",
          field: "externalIP",
          width: 100
        },
        {
          headerName: "Port",
          field: "port",
          width: 100
        },
        {
          headerName: "user name",
          field: "username",
          width: 100
        },
        {
          headerName: "Reason",
          field: "updateReason",
          width: 100
        }
    ]; */
	this.columnDefs = [
       
      {
        headerName: "Name",
        field: "companyName",
		 checkboxSelection: true,
        width: 100
      },
        {
          headerName: "Logo",
          field: "companyLogo",
          width: 100
        },
        {
          headerName: "address",
          field: "addressLine1",
          width: 100
        },
		{
          headerName: "address",
          field: "addressLine2",
          width: 100
        },
		{
          headerName: "address",
          field: "addressLine3",
          width: 100
        },
		{
          headerName: "Region",
          field: "region",
          width: 100
        },
		{
          headerName: "Country",
          field: "country",
          width: 100
        },
		{
          headerName: "State",
          field: "state",
          width: 100
        },
		{
          headerName: "Pincode",
          field: "pincode",
          width: 100
        },
         
    ];
	
	 
  
  }

 
  ngOnInit() {
   this.cSer.getCompanies().subscribe((data: any) => {
      this.rowData =data;
	  console.log(data);
    });
  }


}

