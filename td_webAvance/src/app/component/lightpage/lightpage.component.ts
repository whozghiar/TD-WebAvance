import { Component } from '@angular/core';
import {NgClass, NgFor} from "@angular/common";
import {LightComponent} from "../light/light.component";

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


  lightArray: any[] = [
    {
      toggle: false,
      title: "Salon"
    },
    {
      toggle: false,
      title: "Cuisine"
    },
    {
      toggle: false,
      title: "Chambre"
    },
    {
      toggle: false,
      title: "Salle de bain"
    }
  ];


}
