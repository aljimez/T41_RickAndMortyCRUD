import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charac-by-id',
  templateUrl: './charac-by-id.component.html',
  styleUrls: ['./charac-by-id.component.css']
})
export class CharacByIdComponent implements OnInit{
  id: number =0;
  character: any = null;

  constructor( private router: Router){}

  //Launches while program starts
    ngOnInit():void {


    }

    goBack(){
      this.router.navigate(['/personajes']);
    }
}
