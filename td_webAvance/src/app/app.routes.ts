import { Routes } from '@angular/router';
import {LightpageComponent} from "./component/lightpage/lightpage.component";
import {RacineComponent} from "./component/racine/racine.component";

export const routes: Routes = [
  { path: 'lights',component: LightpageComponent },
  { path: 'racine',component: RacineComponent},
  { path: '**',redirectTo: 'lights'}
];
