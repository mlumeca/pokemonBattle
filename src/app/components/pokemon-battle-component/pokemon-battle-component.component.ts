import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../models/pokemon-interface';


@Component({
  selector: 'app-pokemon-battle-component',
  templateUrl: './pokemon-battle-component.component.html',
  styleUrl: './pokemon-battle-component.component.css'
})
export class PokemonBattleComponentComponent implements OnInit{
  pokemonListing: PokemonResponse[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((response) => {});
  }
}