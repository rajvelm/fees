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
      heading: 'Configuration'
    }
  },
  {
    path: 'config',
	  component: ConfigComponent,
	  data: {
		heading: 'Configuration'
	  }
  },
  {
    path: 'integrate',
	  component: IntegrateComponent,
	  data: {
		heading: 'Integration'
	  }
  },
  {
    path: 'integrateStep2',
	  component: IntegrateStep2Component,
	  data: {
		heading: 'Integration'
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
		heading: 'Transformation'
	  }
  },
  {
    path: 'transformationStep3',
	  component: TransformationComponentStep3,
	  data: {
		heading: 'Transformation'
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
