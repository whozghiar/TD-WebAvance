import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightService {

  private lightArray: any[] = [
    {
      id: 0,
      toggle: false,
      title: "Salon"
    },
    {
      id: 1,
      toggle: false,
      title: "Cuisine"
    },
    {
      id: 2,
      toggle: false,
      title: "Chambre"
    },
    {
      id: 3,
      toggle: false,
      title: "Salle de bain"
    }
  ];

  private nextId: number = 4;
  constructor() { }

  /**
   * Get all lights
   */
  getAllLights(): any[] {
    return this.lightArray;
  }

  /**
   * Add a new light to the list
   */
  addLight(titre : string): void {
    titre = titre ? titre : 'Nouvelle pièce';

    let light = {
      id: this.nextId,
      toggle: false,
      title: titre
    }
    this.lightArray.push(light);
    this.nextId++;
  }

  /**
   * Remove a light from the list
   * @param id
   */
  removeLight(id : number): void {
    this.lightArray = this.lightArray.filter(light => light.id !== id);
  }
}
