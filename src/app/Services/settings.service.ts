import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings : any ={
    baseUrl : "http://localhost:65305/"
  }
  constructor() { }

  get getSettings(){
    return this.settings;
   }
}
