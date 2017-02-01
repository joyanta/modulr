import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
      li > a.active {  background-color: #4DDCD9; }
    `]
})
export class NavBarComponent {
}
