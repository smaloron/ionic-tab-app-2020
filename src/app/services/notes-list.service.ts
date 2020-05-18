import { Injectable } from "@angular/core";
import { Note } from "../models/note";
import { StorageService } from "./storage.service";
import { NoteService } from "./note.service";

@Injectable({
  providedIn: "root",
})
export class NotesListService {
  private notesList: Array<Note> = [];

  constructor(
    private storage: StorageService,
    private noteService: NoteService
  ) {}

  public getNotes(): Promise<Array<Note>> {
    return this.storage.getObject("notes").then((data: any) => {
      this.notesList = data.map((item) => {
        let note = new Note();
        note
          .setText(item.text)
          .setTitle(item.title)
          .setId(item.id)
          .setColor(item.color);
        return note;
      });
      return this.notesList;
    });
  }

  public addNote(note: Note) {
    note.setId(new Date().getTime());
    this.notesList.push(note);
    this.storage.setObject("notes", this.notesList);
    this.noteService.wipe();
  }

  private findNoteIndexById(id: number): number {
    return this.notesList.findIndex((item) => {
      return item.getId() == id;
    });
  }

  public updateNote(note: Note) {
    const index = this.findNoteIndexById(note.getId());
    this.notesList[index] = note;
    this.storage.setObject("notes", this.notesList);
    this.noteService.wipe();
  }

  public deleteNote(id: number) {
    const index = this.findNoteIndexById(id);
    this.notesList.splice(index, 1);
    this.storage.setObject("notes", this.notesList);
  }

  public getNoteById(id: number): Note {
    const index = this.findNoteIndexById(id);
    return this.notesList[index];
  }
}
