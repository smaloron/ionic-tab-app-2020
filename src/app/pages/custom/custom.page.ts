import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-custom",
  templateUrl: "./custom.page.html",
  styleUrls: ["./custom.page.scss"],
})
export class CustomPage implements OnInit, OnDestroy {
  public title: string;

  constructor(private activatedRoute: ActivatedRoute) {
    //Récupération des paramètres transmis dans la route
    this.activatedRoute.paramMap.subscribe((data) => {
      console.log(data);
      this.title = data.get("title");
    });
  }
  ngOnDestroy(): void {
    console.log("La page custom est détruite");
  }

  ngOnInit() {
    console.log("La page custom est créée");
  }

  ionViewWillEnter() {
    console.log("La page custom sera affichée");
  }

  ionViewDidEnter() {
    console.log("La page custom est affichée");
  }

  ionViewWillLeave() {
    console.log("La page custom est sur le point de disparaitre");
  }

  ionViewDidLeave() {
    console.log("La page custom a disparu");
  }
}
