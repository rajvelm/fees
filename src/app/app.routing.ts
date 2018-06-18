import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule'
  },
  {
    path: 'onboarding',
    loadChildren: './onboarding/onboarding.module#OnboardingModule'
  },
  {
    path: 'inventory',
    loadChildren: './inventory/inventory.module#InventoryModule'
  },
  {
    path: 'forms',
    loadChildren: './form/form.module#FormModule'
  }, 
  {
    path: 'fees',
    loadChildren: './fees/fees.module#FeesModule'
  },
  {
    path: 'docs',
    loadChildren: './docs/docs.module#DocsModule'
  },
  {
    path: 'declaration',
    loadChildren: './declaration/declaration.module#DeclarationModule'
  },
  {
    path: 'test',
    loadChildren: './test/test.module#TestModule'
  }
  ]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }, {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}];
