import { Component, EventEmitter, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-choose-pokemon-component',
  templateUrl: './choose-pokemon-component.component.html',
  styleUrls: ['./choose-pokemon-component.component.css']
})
export class ChoosePokemonComponentComponent {
  pokemon1: string = '';
  pokemon2: string = '';

  @Output() onBattleReady = new EventEmitter<{ pokemon1: any, pokemon2: any }>();

  constructor(private pokemonService: PokemonService) {}

  validatePokemon() {
    this.pokemonService.getPokemon(this.pokemon1).subscribe({
      next: (data1) => {
        this.pokemonService.getPokemon(this.pokemon2).subscribe({
          next: (data2) => {
            this.onBattleReady.emit({ pokemon1: data1, pokemon2: data2 });
          },
          error: () => alert(`"${this.pokemon2}" no es un nombre válido de Pokémon.`)
        });
      },
      error: () => alert(`"${this.pokemon1}" no es un nombre válido de Pokémon.`)
    });
  }
}