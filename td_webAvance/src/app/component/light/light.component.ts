import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-light',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './light.component.html',
  styleUrl: './light.component.css'
})
export class LightComponent {

  @Input("light")
  light: any = {
    toggle:  false,
    title:  "UNKNOWN"
  };


  /**
   * Switch the light on or off
   */
  switchLight() {
    this.light.toggle = !this.light.toggle;
  }
}
