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

import { SidebarModule } from 'ng-sidebar';

import { DocsComponent } from './docs.component';
import { DocsRoutes } from './docs.routing';

@NgModule({
  imports: [NgbTooltipModule,
			NgbModule,
			CommonModule,
			RouterModule.forChild(DocsRoutes),
			FormsModule,
			ReactiveFormsModule,
			JsonpModule,
			AgGridModule.withComponents([]),
			// AgGridModule.forRoot(),
			DragulaModule,
      NgxDatatableModule,
      FileUploadModule,   NgxChartsModule,
      SidebarModule],
  declarations: [DocsComponent],

})

export class DocsModule {

}
