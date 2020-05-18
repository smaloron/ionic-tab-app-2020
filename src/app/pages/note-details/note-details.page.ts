import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Note } from "src/app/models/note";
import { NotesListService } from "src/app/services/notes-list.service";

@Component({
  selector: "app-note-details",
  templateUrl: "./note-details.page.html",
  styleUrls: ["./note-details.page.scss"],
})
export class NoteDetailsPage implements OnInit {
  public note: Note;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notesListService: NotesListService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data) => {
      const id = +data.get("id");
      this.note = this.notesListService.getNoteById(id);
    });
  }
}
