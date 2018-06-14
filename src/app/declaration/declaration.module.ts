import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { AgGridModule} from 'ag-grid-angular/main';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { DeclarationComponent } from './declaration.component';
import { DeclarationRoutes } from './declaration.routing';


@NgModule({
  imports: [NgbTooltipModule,
			NgbModule,
			CommonModule,
			RouterModule.forChild(DeclarationRoutes),
			FormsModule,
			ReactiveFormsModule,
			JsonpModule,
			AgGridModule.withComponents([]),
			// AgGridModule.forRoot(),
			DragulaModule],
  declarations: [DeclarationComponent]
})

export class DeclarationModule {

}
