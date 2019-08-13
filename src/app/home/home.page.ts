import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
offset = 0;
pokemon = [];
//array

  constructor(private pokeServicer: PokemonService) {}

  ngOnInit(){
    this.carregarPokemon();
  }

  carregarPokemon(carregarMais = false){
    if (carregarMais) {
      this.offset += 25;
    }
    this.pokeServicer.getPokemon(this.offset).subscribe(res =>{
      console.log('results', res);
      if (this.offset > 0){
        this.pokemon = [...this.pokemon,...res]; //concatena os dados de pokemon com os resultados
      }
      this.pokemon = res;
    })
  }
}
