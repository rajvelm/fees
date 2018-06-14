import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { InventoryRoutes } from './inventory.routing';

import { ConfigComponent } from './config/config.component';
import { IntegrateComponent } from './integrate/integrate.component';
import { HeatmapComponent } from './heatmap/heatmap.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(InventoryRoutes), DragulaModule],
  declarations: [ConfigComponent,IntegrateComponent,HeatmapComponent]
})

export class InventoryModule {}
