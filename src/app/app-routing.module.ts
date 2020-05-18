import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "custom/:title",
    loadChildren: () =>
      import("./pages/custom/custom.module").then((m) => m.CustomPageModule),
  },
  {
    path: "note-details/:id",
    loadChildren: () =>
      import("./pages/note-details/note-details.module").then(
        (m) => m.NoteDetailsPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
