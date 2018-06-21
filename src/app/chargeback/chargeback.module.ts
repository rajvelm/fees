import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { JsonpModule } from '@angular/http';
import { AgGridModule} from 'ag-grid-angular/main';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { ChargebackComponent } from './chargeback.component';
import { ChargebackRoutes } from './chargeback.routing';


@NgModule({
  imports: [NgbTooltipModule,
			NgbModule,
			CommonModule,
			RouterModule.forChild(ChargebackRoutes),
			FormsModule,
      ReactiveFormsModule,
      NgxChartsModule,
			ReactiveFormsModule,
			JsonpModule,
			AgGridModule.withComponents([]),
			// AgGridModule.forRoot(),
			DragulaModule],
  declarations: [ChargebackComponent]
})

export class ChargebackModule {

}
