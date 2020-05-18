import { Component } from "@angular/core";
import { NoteService } from "src/app/services/note.service";
import { Note } from "src/app/models/note";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  public note: Note;

  constructor(private noteService: NoteService) {
    this.note = noteService.getData();
  }
}
