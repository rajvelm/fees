import { Routes } from '@angular/router';

import { ChargebackComponent } from './chargeback.component';

export const ChargebackRoutes: Routes = [
	{
	   path: '',
		  component: ChargebackComponent,
		  data: {
			heading: 'Chargeback',
			removeFooter: true
		  }
	 }
];
