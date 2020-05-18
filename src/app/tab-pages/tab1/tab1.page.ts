import { Component, OnInit } from "@angular/core";
import { SettingsService } from "src/app/services/settings.service";
import { NoteService } from "src/app/services/note.service";
import { NotesListService } from "src/app/services/notes-list.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  constructor(
    public settingService: SettingsService,
    public noteService: NoteService,
    private notesListService: NotesListService,
    private router: Router
  ) {}

  public saveNote() {
    if (this.noteService.isValid()) {
      if (this.noteService.isNew()) {
        this.notesListService.addNote(this.noteService.getData());
      } else if (this.noteService.isUpdated()) {
        this.notesListService.updateNote(this.noteService.getData());
      }

      this.router.navigate(["/tabs/note-list"]);
    }
  }

  ngOnInit(): void {
    console.log("la page tab 1 est créée");
  }

  ionViewWillEnter() {
    console.log("La page tab1 sera affichée");
  }

  ionViewDidEnter() {
    console.log("La page tab1 est affichée");
  }
}
