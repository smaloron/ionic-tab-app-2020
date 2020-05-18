import { Component, OnInit } from "@angular/core";
import { NotesListService } from "src/app/services/notes-list.service";
import { Note } from "src/app/models/note";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { NoteService } from "src/app/services/note.service";

@Component({
  selector: "app-note-list",
  templateUrl: "./note-list.page.html",
  styleUrls: ["./note-list.page.scss"],
})
export class NoteListPage implements OnInit {
  public notesList: Array<Note>;

  constructor(
    private noteService: NoteService,
    private notesListService: NotesListService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.notesListService.getNotes().then((data) => {
      this.notesList = data;
    });
  }

  public async deleteNote(note: Note) {
    const alert = await this.alertCtrl.create({
      mode: "ios",
      header: "Confirmation",
      message:
        "Etes vous sur(e) de vouloir <strong>supprimer</strong> cette note ?",
      buttons: [
        {
          text: "Non",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Oui",
          handler: () => {
            this.notesListService.deleteNote(note.getId());
          },
        },
      ],
    });

    alert.present();
  }

  goToDetails(note: Note) {
    this.router.navigateByUrl("/note-details/" + note.getId());
  }

  goToForm(note: Note) {
    this.noteService.setData(note);
    this.router.navigate(["/tabs/tab1"]);
  }
}
