import { Component } from '@angular/core';

@Component({
  template: `
    <tabs>
      <tab [tabTitle]="'Customers'">
        <customers-info></customers-info>
      </tab>
      <tab tabTitle="Approvals">Approvals Content</tab>
    </tabs>
  `
})
export class DashboardComponent {
}

// used to be <search></search>
