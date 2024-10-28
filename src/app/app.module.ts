import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonBattleComponentComponent } from './components/pokemon-battle-component/pokemon-battle-component.component';
import { PokemonComponentComponent } from './components/pokemon-component/pokemon-component.component';
import { provideHttpClient } from '@angular/common/http';
import { ChoosePokemonComponentComponent } from './components/choose-pokemon-component/choose-pokemon-component.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './modules/material.module';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonBattleComponentComponent,
    PokemonComponentComponent,
    ChoosePokemonComponentComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
