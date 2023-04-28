import { breakingFunction } from 'projects/breaking-changes-lib/src/public-api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent {

  public myString = breakingFunction('a string', 20);

}
