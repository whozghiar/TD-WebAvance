import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LightService {

  private lightArray: any[] = [];

  constructor(private httpClient : HttpClient) {
    this.refreshLights();
  }

  refreshLights() {
    this.httpClient.get('/api/lights').subscribe( (lights : any) => {
      this.lightArray = lights;
    });
  }

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
      toggle: false,
      title: titre
    }

    this.httpClient.post('/api/lights', light).subscribe( (response : any) => {
      console.log(response);
      this.refreshLights();
    });
  }

  /**
   * Remove a light from the list
   * @param id
   */
  removeLight(id : number): void {
    this.lightArray = this.lightArray.filter(light => light.id !== id);
  }

  toggleLight(light: any) {
    light.toggle = !light.toggle;
    this.httpClient.post("/api/lights", light).subscribe((lightReceived: any) => {
      light = lightReceived;
    });
  }
}
