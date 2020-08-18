import { Component, Input } from '@angular/core';

@Component({
  selector: 'foo-sun-logo',
  templateUrl: './sun-logo.component.html',
  styleUrls: ['./sun-logo.component.scss']
})
export class SunLogoComponent {
  @Input() sunImagePath: string;
  @Input() hourSun: string;
  @Input() title: string;
  borderRadius = '50px';

  radiusSide(): any {
    if (this.title !== 'Sunset') {
      return {
        'border-bottom-left-radius': this.borderRadius,
      };
    } else {
      return {
        'border-bottom-right-radius': this.borderRadius,
      };
    }
  }
}
