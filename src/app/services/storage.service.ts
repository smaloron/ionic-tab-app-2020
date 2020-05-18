import { Injectable } from "@angular/core";
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor() {}

  async setString(key: string, value: string) {
    await Storage.set({ key, value });
  }

  async getString(key: string): Promise<{ value: string }> {
    return await Storage.get({ key });
  }

  async setObject(key: string, value: any) {
    await Storage.set({ key, value: JSON.stringify(value) });
  }

  async getObject(key: string): Promise<{ value: any }> {
    const data: any = await Storage.get({ key });
    console.log(data);
    return JSON.parse(data.value);
  }
}
