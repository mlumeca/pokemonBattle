import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonResponse } from '../../models/pokemon-interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrl: './pokemon-component.component.css'
})
export class PokemonComponentComponent {
  @Input() pokemon: any;
  @Input() health: number = 100;
  @Output() attack = new EventEmitter<void>();

  onAttack() {
    this.attack.emit();
  }
}