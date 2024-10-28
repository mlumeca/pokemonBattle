import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonResponse } from '../../models/pokemon-interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrl: './pokemon-component.component.css'
})
export class PokemonComponentComponent implements OnInit {

  pokemonId: string | null = '';
  pokemon: PokemonResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }
  
  ngOnInit(): void {
    debugger;
    this.pokemonId = this.route.snapshot.paramMap.get('id');
    debugger;
    
    this.pokemonService.getPokemon().subscribe((response) => {
      this.pokemon = response;
    });
    
  }
}