import {Component, EventEmitter, Input, Output} from '@angular/core';
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
    id:     0,
    toggle:  false,
    title:  "UNKNOWN"
  };

  @Output("remove")
  remove: EventEmitter<any> = new EventEmitter<any>();
  @Output("toggled")
  toggled: EventEmitter<any> = new EventEmitter<any>();


  /**
   * Launch the remove event
   */
  launchRemove() {
    this.remove.emit();
  }

  /**
   * Switch the light on or off
   */
  switchLight() {
    this.toggled.emit();
  }
}
