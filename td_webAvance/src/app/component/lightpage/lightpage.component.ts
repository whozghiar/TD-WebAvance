import { Component } from '@angular/core';
import {NgClass, NgFor} from "@angular/common";
import {LightComponent} from "../light/light.component";
import {LightService} from "../../service/light.service";

@Component({
  selector: 'app-lightpage',
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    LightComponent
  ],
  templateUrl: './lightpage.component.html',
  styleUrl: './lightpage.component.css'
})
export class LightpageComponent {

  constructor(protected lightService: LightService) {
  }

  handleRemoveLight(id: number){
    console.log("Remove light");
    this.lightService.removeLight(id);
  }
}
