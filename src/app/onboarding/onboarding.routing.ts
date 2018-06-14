import { Routes } from '@angular/router';

import { CompaniesComponent } from './companies/companies.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AccountsComponent } from './accounts/accounts.component';

import { CreateCompanyComponent } from './companies/create.company.component';



export const OnboardingRoutes: Routes = [
	{
	   path: 'companies',
		  component: CompaniesComponent,
		  data: {
			heading: 'Companies'
		  }
	 },
	 {
	   path: 'contacts',
		  component: ContactsComponent,
		  data: {
			heading: 'Contacts'
		  }
	 },
	 {
	   path: 'accounts',
		  component: AccountsComponent,
		  data: {
			heading: 'Accounts'
		  }
	 },
	 {
	   path: 'create',
		  component: CreateCompanyComponent,
		  data: {
			heading: 'CreateCompany'
		  }
	 },
	  
];
