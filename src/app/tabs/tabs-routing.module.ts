import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        loadChildren: () =>
          import("../tab-pages/tab1/tab1.module").then((m) => m.Tab1PageModule),
      },
      {
        path: "tab2",
        loadChildren: () =>
          import("../tab-pages/tab2/tab2.module").then((m) => m.Tab2PageModule),
      },
      {
        path: "tab3",
        loadChildren: () =>
          import("../tab-pages/tab3/tab3.module").then((m) => m.Tab3PageModule),
      },
      {
        path: "note-list",
        loadChildren: () =>
          import("../tab-pages/note-list/note-list.module").then(
            (m) => m.NoteListPageModule
          ),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("../tab-pages/settings/settings.module").then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: "",
        redirectTo: "/tabs/tab1",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/tab1",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
