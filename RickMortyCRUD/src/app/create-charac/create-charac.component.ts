import { Component,OnInit } from '@angular/core';
import { ListCharacterService } from '../service/list-character.service';
import { Router } from '@angular/router';
import { Character } from '../models/personajes';

@Component({
  selector: 'app-create-charac',
  templateUrl: './create-charac.component.html',
  styleUrls: ['./create-charac.component.css']
})
export class CreateCharacComponent implements OnInit{
  characters: Character = new Character;
  ngOnInit(): void {
    this.saveCharacters();
  }

constructor(private CharList: ListCharacterService,private router:Router){}

saveCharacters(){
this.CharList.createCharacter(this.characters).subscribe(response =>{this.router.navigate(['/personajes']);
console.log(response);
})
}
}
