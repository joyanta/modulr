import { Component } from '@angular/core';

@Component({
    selector: 'modulr-footer',
    templateUrl: 'app/common-ui/footer.component.html',
    styles: [`
      .footer {
        position: absolute;
        bottom: 0;
        height: 60px;
        background-color: #5C686D;
      }
    `]
})
export class FooterComponent {
}
