import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ColumnApi, GridApi, GridOptions} from "ag-grid/main";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { single, multi } from '../shared/chartData';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chargeback',
  templateUrl: './chargeback.component.html',
  styleUrls: ['./chargeback.component.scss'],
  providers:[]
})
export class ChargebackComponent implements OnInit {
  private gridOptions: GridOptions;
  private icons: any;
  public rowData: any[];
  public columnDefs: any[];
  public rowCount: string;

  closeResult: string;

  private api: GridApi;
  private columnApi: ColumnApi;

  single: any[];
  multi: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  tooltipDisabled = false;
  xAxisLabel = 'Period';
  showYAxisLabel = true;
  yAxisLabel = 'USD';
  showGridLines = true;
  innerPadding = 0;
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;

  colorScheme = {
    domain: [
      '#0099cc', '#2ECC71', '#4cc3d9'
    ]
  };
  schemeType = 'ordinal';

  constructor(private modalService: NgbModal) {
      this.gridOptions = <GridOptions>{};
      this.columnDefs = [
            {headerName: 'Trading Plaform', field: 'tradingPlatform' },
            {headerName: 'User Id', field: 'userId' },
            {headerName: 'Trader Name', field: 'traderName'},
            {headerName: 'Client Name', field: 'clientName' },
            {headerName: 'Market Name', field: 'marketName' },
            {headerName: 'Waiver Type', field: 'waiverType'},
            {headerName: 'User Type', field: 'userType' },
            {headerName: 'Market Data Cost', field: 'marketDataCost' },
            {headerName: 'Tax', field: 'tax' },
            {headerName: 'Total Market Data Cost', field: 'totalMarketDataCost' },
            {headerName: 'Client Account', field: 'clientAccount' },
            {headerName: 'Business Unit', field: 'businessUnit'},
            {headerName: 'Sub Business Unit', field: 'subBusinessUnit' },
            {headerName: 'Team', field: 'team' },
            {headerName: 'Business Unit Account', field: 'businessUnitAccount'}
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
           Object.assign(this, {
             single,
             multi
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
