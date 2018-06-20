import { Routes } from '@angular/router';

import { ConfigComponent } from './config/config.component';
import { IntegrateComponent } from './integrate/integrate.component';
import { IntegrateStep2Component } from './integrateStep2/integrateStep2.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { TransformationComponent} from './transformation/transformation.component';
import { TransformationComponentStep2} from './transformation/transformationStep2.component';
import { TransformationComponentStep3} from './transformation/transformationStep3.component';

export const InventoryRoutes: Routes = [
  {
    path: '',
    component: ConfigComponent,
    data: {
      heading: 'Config'
    }
  },
  {
    path: 'config',
	  component: ConfigComponent,
	  data: {
		heading: 'Config'
	  }
  },
  {
    path: 'integrate',
	  component: IntegrateComponent,
	  data: {
		heading: 'Integrate'
	  }
  },
  {
    path: 'integrateStep2',
	  component: IntegrateStep2Component,
	  data: {
		heading: 'IntegrateStep2'
	  }
  },
  {
    path: 'transformation',
	  component: TransformationComponent,
	  data: {
		heading: 'Transformation'
	  }
  },
  {
    path: 'transformationStep2',
	  component: TransformationComponentStep2,
	  data: {
		heading: 'TransformationStep2'
	  }
  },
  {
    path: 'transformationStep3',
	  component: TransformationComponentStep3,
	  data: {
		heading: 'TransformationStep3'
	  }
  },
  {
    path: 'heatmap',
	  component: HeatmapComponent,
	  data: {
		heading: 'Cost Optimization and Validation'
	  }
  },


];
