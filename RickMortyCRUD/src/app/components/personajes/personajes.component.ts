import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/models/personajes';
import { ListCharacterService } from 'src/app/service/list-character.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit{

  personajes: any = null;
  characters: Personajes = new Personajes;
  character: Personajes[] = [];

  constructor( private characte:ListCharacterService) {}
//Get data while program starts
  ngOnInit():void {
    this.getCharacters();
  }

   getCharacters() {
      this.characte.createCharacter(this.characters).subscribe(
        results =>{this.characters = results; console.log(results)

        },
        (error: any): void => {
          console.log(error);
        }
      );
    }





}
