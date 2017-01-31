import { Component } from '@angular/core';

@Component({
  selector: 'modulr-app',
  template: `
    <modulr-header></modulr-header>
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    <modulr-footer></modulr-footer>
  `
})
export class AppComponent  { }
