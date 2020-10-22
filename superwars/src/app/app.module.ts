import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarriorHeroesComponent } from './warrior-heroes/warrior-heroes.component';
import { WarriorVillanComponent } from './warrior-villan/warrior-villan.component';
import { HeroesScoreComponent } from './heroes-score/heroes-score.component';

@NgModule({
  declarations: [
    AppComponent,
    WarriorHeroesComponent,
    WarriorVillanComponent,
    HeroesScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
