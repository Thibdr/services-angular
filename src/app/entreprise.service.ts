import { Injectable } from '@angular/core';
import { Equipe } from './models/equipe';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  equipes:Equipe[] = [];
  nomEquipe:string='';

  constructor() { }

  onAjouterEquipe(){
    let e = new Equipe(this.nomEquipe);
    this.nomEquipe='';
    this.equipes.push(e);
  }

  onEnleverEquipe(indice: number){
    this.equipes.splice(indice,1);
  }
}
