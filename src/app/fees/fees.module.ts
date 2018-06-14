import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { AgGridModule} from 'ag-grid-angular/main';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
//import { CustomFilterPipe} from './customfilter.pipe';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//import { FilterPipe} from './filter.pipe';


import { FeesComponent } from './fees.component';
import { FeesRoutes } from './fees.routing';

@NgModule({
  imports: [NgbTooltipModule,
			NgbModule,
			CommonModule,
			RouterModule.forChild(FeesRoutes),
			FormsModule,
			ReactiveFormsModule,
			JsonpModule,
			AgGridModule.withComponents([]),
			// AgGridModule.forRoot(),
			DragulaModule,
      NgxDatatableModule,
      FileUploadModule,   NgxChartsModule],
  declarations: [FeesComponent],

})

export class FeesModule {

}
