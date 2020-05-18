import { Injectable } from "@angular/core";

export interface SettingsInterface {
  buttonColor: string;
}

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  private settings: SettingsInterface;

  constructor() {
    this.settings = {
      buttonColor: "warning",
    };
  }

  public getSettings(): SettingsInterface {
    return this.settings;
  }
}
