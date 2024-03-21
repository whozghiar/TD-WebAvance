import { Component } from '@angular/core';
import {NgClass, NgFor} from "@angular/common";
import {LightComponent} from "../light/light.component";
import {LightService} from "../../service/light.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-lightpage',
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    LightComponent,
    FormsModule
  ],
  templateUrl: './lightpage.component.html',
  styleUrl: './lightpage.component.css'
})
export class LightpageComponent {

  constructor(protected lightService: LightService) {
  }

  light: any = {
    title :"",
    color : "",
  }

  handleRemoveLight(id: number){
    console.log("Remove light");
    this.lightService.removeLight(id);
  }
}
