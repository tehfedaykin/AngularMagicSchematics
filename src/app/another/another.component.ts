import { Component } from '@angular/core';
import { breakingFunction } from 'breaking-changes-lib';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss']
})
export class AnotherComponent {

  public brokenThing: string = breakingFunction("hello world", 3);
}
