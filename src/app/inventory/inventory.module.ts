import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { InventoryRoutes } from './inventory.routing';

import { ConfigComponent } from './config/config.component';
import { IntegrateComponent } from './integrate/integrate.component';
import { IntegrateStep2Component } from './integrateStep2/integrateStep2.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { TransformationComponent} from './transformation/transformation.component';
import { TransformationComponentStep2} from './transformation/transformationStep2.component';
import { TransformationComponentStep3} from './transformation/transformationStep3.component';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(InventoryRoutes), DragulaModule, Ng2SearchPipeModule,
	Ng2OrderModule, FormsModule, AgGridModule.withComponents([]),],
  declarations: [ConfigComponent,IntegrateComponent,IntegrateStep2Component,HeatmapComponent, TransformationComponent,TransformationComponentStep2, TransformationComponentStep3]
})

export class InventoryModule {}
