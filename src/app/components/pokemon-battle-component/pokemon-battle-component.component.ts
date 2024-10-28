import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-battle-component',
  templateUrl: './pokemon-battle-component.component.html',
  styleUrl: './pokemon-battle-component.component.css'
})
export class PokemonBattleComponentComponent {
  @Input() pokemon1: any;
  @Input() pokemon2: any;
  health1: number = 100;
  health2: number = 100;
  battleOver: boolean = false;
  winner: string = '';

  onBattleReady(pokemons: { pokemon1: any, pokemon2: any }) {
    this.pokemon1 = pokemons.pokemon1;
    this.pokemon2 = pokemons.pokemon2;
    this.health1 = 100;
    this.health2 = 100;
    this.battleOver = false;
    this.winner = '';
  }

  handleAttack(attacker: number) {
    if (this.battleOver) return;

    if (attacker === 1) {
      this.health2 -= Math.floor(Math.random() * 20) + 5;
      if (this.health2 <= 0) {
        this.battleOver = true;
        this.winner = `${this.pokemon1.name} gana la batalla!`;
      }
    } else {
      this.health1 -= Math.floor(Math.random() * 20) + 5;
      if (this.health1 <= 0) {
        this.battleOver = true;
        this.winner = `${this.pokemon2.name} gana la batalla!`;
      }
    }
  }
}