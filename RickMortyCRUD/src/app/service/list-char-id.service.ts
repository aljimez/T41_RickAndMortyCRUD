import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCharIdService {

  id:number =0;
  constructor(private http:HttpClient) { }

  ngOnInit():void {

  }

  //Add HttpClientModule to access the api
  detlChar(id:any){

    console.log(id+" services");

    return this.http.get("https://rickandmortyapi.com/api/character/"+this.id);
  }
}
