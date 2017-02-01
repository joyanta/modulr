import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/index';
import { ReportComponent } from './report/report.component';

export const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'report', component: ReportComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
