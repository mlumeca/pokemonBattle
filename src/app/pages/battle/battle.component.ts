import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrl: './battle.component.css',
})
export class BattleComponent {
  // TURN possible values: 1, 2
  pokemonTurn = 1;
  pokemonPlayer1Id = 55;
  pokemonPlayer2Id = 24;
  lifePokemon1 = 100;
  lifePokemon2 = 100;
  showAnimation: boolean = false;

  options: AnimationOptions = {
    path: '/assets/animation_winner.json',
  };

  applyDamage(damage: number) {
    if (this.pokemonTurn == 1) {
      // Apply damage to Pokemon 2
      this.lifePokemon2 -= damage;
      this.pokemonTurn = 2;
    } else {
      // Apply damage to Pokemon 1
      this.lifePokemon1 -= damage;
      this.pokemonTurn = 1;
    }

      //Check life of Pokemon
    if (this.lifePokemon1 <= 0) {
      //attack button is disabled in both pokemons
      //play victory_music the same way the medium_explosion sounds when the event is triggered
      //show animation_winner in the second pokemon the same way the animation_explosion was showed instead of the pokemon sprite 

    }
    else if (this.lifePokemon2 <= 0) {
            //attack button is disabled in both pokemons
      //play victory_music the same way the medium_explosion sounds when the event is triggered
      //show animation_winner in the first pokemon the same way the animation_explosion was showed instead of the pokemon sprite 
    }
  }

}
