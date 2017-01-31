import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: 'app/progress-bar/progress-bar.component.html'
})
export class ProgressBarComponent  {

  spinning: boolean = false;

  @Input()
  public set isRunningRequest(value: boolean) {
    this.spinning = value;
  }
}
