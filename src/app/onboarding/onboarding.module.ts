import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { AgGridModule } from 'ag-grid-angular';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { OnboardingRoutes } from './onboarding.routing';
import { CompaniesComponent } from './companies/companies.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AccountsComponent } from './accounts/accounts.component';

import { CreateCompanyComponent } from './companies/create.company.component';

@NgModule({
  imports: [NgbTooltipModule,
			NgbModule,
			CommonModule,
			RouterModule.forChild(OnboardingRoutes),
			FormsModule,
			ReactiveFormsModule,
			JsonpModule,
			AgGridModule.withComponents([]),
			// AgGridModule.forRoot(),
			DragulaModule],
  declarations: [CompaniesComponent,ContactsComponent,AccountsComponent,CreateCompanyComponent]
})

export class OnboardingModule {

}
