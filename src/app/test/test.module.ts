import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { AgGridModule} from 'ag-grid-angular';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { TestComponent } from './test.component';
import { TestRoutes } from './test.routing';


@NgModule({
  imports: [NgbTooltipModule,
			NgbModule,
			CommonModule,
			RouterModule.forChild(TestRoutes),
			FormsModule,
			ReactiveFormsModule,
			JsonpModule,
			AgGridModule.withComponents([]),
			// AgGridModule.forRoot(),
			DragulaModule],
  declarations: [TestComponent]
})

export class TestModule {

}
