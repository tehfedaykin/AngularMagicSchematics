import { Component } from '@angular/core';
import { breakingFunction } from 'breaking-changes-lib';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent {
public brokenThing: string = breakingFunction("hello world", 3);
}
