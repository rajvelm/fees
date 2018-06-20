import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ColumnApi, GridApi, GridOptions} from "ag-grid/main";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { single, multi } from '../../shared/chartData';

@Component({
  selector: 'app-integrateStep2',
  templateUrl: './integrateStep2.component.html',
  styleUrls: ['./integrateStep2.component.scss']
})
export class IntegrateStep2Component implements OnInit {
  private gridOptions: GridOptions;
  private icons: any;
  public rowData: any[];
  public columnDefs: any[];
  public rowCount: string;

  closeResult: string;

  private api: GridApi;
  private columnApi: ColumnApi;

  constructor(private modalService: NgbModal) {
      this.gridOptions = <GridOptions>{};
      this.columnDefs = [
             {headerName: 'Display Name', field: 'displayName' },
             {headerName: 'User Group', field: 'userGroup' },
             {headerName: 'User Status', field: 'userStatus'},
             {headerName: 'Market', field: 'market' },
             {headerName: 'Product Group', field: 'productGroup' },
             {headerName: 'Allowed', field: 'allowed'},
             {headerName: 'Last Changed', field: 'lastChanged' },
             {headerName: 'Created Date', field: 'createdDate' },
             {headerName: 'Locked Out', field: 'lockedOut'},
             {headerName: 'Last LoggedIn', field: 'lastLoggedIn' },
             {headerName: 'Country', field: 'country' },
             {headerName: 'Address', field: 'address' },
             {headerName: 'City', field: 'city' },
             {headerName: 'State', field: 'state' },
             {headerName: 'Postal Code', field: 'postalCode' },
             {headerName: 'Email', field: 'email' },
             {headerName: 'Phone Number', field: 'phoneNumber' }
        ];

        this.gridOptions.rowStyle={background:'#3a3a3a'};
        // this.gridOptions.headerStyle={background:'#4d4d4d', color:'#b2b2b2'};
        this.gridOptions.getRowStyle = function(params) {
         if (params.node.rowIndex % 2 === 0) {
         return { background: '#3f3f3f' }
         }
       };
       // this.gridOptions.headerHeight =50;
       // this.gridOptions.rowHeight = 50;

       this.fetch((data) => {
             //this.temp = [...data];
             this.rowData = data;
           });

    }

    ngOnInit()
       {
         this.fetch((data) => {
     		  this.rowData = data;
           console.log(this.rowData);
     		});
    	}

      fetch(cb) {
         const req = new XMLHttpRequest();
         req.open('GET', `assets/data/TT_raw.json`);

         req.onload = () => {
           cb(JSON.parse(req.response));
         };

         req.send();
       }
}
