import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosePokemonComponentComponent } from './components/choose-pokemon-component/choose-pokemon-component.component';
import { PokemonBattleComponentComponent } from './components/pokemon-battle-component/pokemon-battle-component.component';

const routes: Routes = [
  { path: 'battle', component: PokemonBattleComponentComponent },
  { path: 'choose-pokemon', component: ChoosePokemonComponentComponent },
  { path: '', redirectTo: '/choose-pokemon', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }