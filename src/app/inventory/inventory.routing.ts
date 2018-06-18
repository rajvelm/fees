import { Routes } from '@angular/router';

import { ConfigComponent } from './config/config.component';
import { IntegrateComponent } from './integrate/integrate.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { TransformationComponent} from './transformation/transformation.component';

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
    path: 'heatmap',
	  component: HeatmapComponent,
	  data: {
		heading: 'Heatmap'
	  }
  },
  {
    path: 'transformation',
	  component: TransformationComponent,
	  data: {
		heading: 'Transformation'
	  }
  }
];
