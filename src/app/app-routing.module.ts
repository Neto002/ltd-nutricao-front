import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./components/main-page/main-page.component";
import { FaleConoscoComponent } from "./components/fale-conosco/fale-conosco.component";

const routes: Routes = [
  // {path: '', loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)},
  { path: '', component: MainPageComponent },
  { path: 'fale-conosco', component: FaleConoscoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
