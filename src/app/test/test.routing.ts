import { Routes } from '@angular/router';

import { TestComponent } from './test.component';

export const TestRoutes: Routes = [
	{
	   path: '',
		  component: TestComponent,
		  data: {
			heading: 'Test',
			removeFooter: true
		  }
	 }
];
