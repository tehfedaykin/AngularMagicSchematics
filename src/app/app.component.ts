import { Component } from '@angular/core';
import { breakingFunction } from 'projects/breaking-changes-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMagicSchematics';

  public brokenThing: string = breakingFunction('hello world', 3);
}
