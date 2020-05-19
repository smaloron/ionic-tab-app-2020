import { Injectable } from "@angular/core";
import { Note } from "../models/note";

@Injectable({
  providedIn: "root",
})
export class NoteService {
  private data: Note;

  constructor() {
    this.data = new Note();
  }

  public getData() {
    return this.data;
  }

  public setData(note: Note) {
    this.data = note;
  }

  public wipe() {
    this.data = new Note();
  }

  public isBlank() {
    return (
      !this.data.getId() &&
      !this.data.getColor() &&
      !this.data.getText() &&
      !this.data.getTitle()
    );
  }

  public isValid() {
    return this.data.getColor() && this.data.getText() && this.data.getTitle();
  }

  public isNew() {
    return !this.data.getId();
  }

  public isUpdated() {
    return this.data.getId();
  }

  public hasPicture() {
    return this.data.getPhoto();
  }
}
