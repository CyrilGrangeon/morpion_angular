import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeuComponent } from './jeu/jeu.component';
import { ReglesComponent } from './regles/regles.component';

const routes: Routes = [
  {path : '', component: JeuComponent},
  {path : 'regles-du-jeu', component : ReglesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
