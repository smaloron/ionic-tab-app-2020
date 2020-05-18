import { Component, OnInit } from "@angular/core";
import {
  SettingsService,
  SettingsInterface,
} from "src/app/services/settings.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
  public settings: SettingsInterface;

  constructor(private settingService: SettingsService) {}

  ngOnInit() {
    this.settings = this.settingService.getSettings();
  }
}
