import { Routes } from '@angular/router';

import { DeclarationComponent } from './declaration.component';

export const DeclarationRoutes: Routes = [
	{
	   path: '',
		  component: DeclarationComponent,
		  data: {
			heading: 'Declaration',
			removeFooter: true
		  }
	 }
];
