import { Component, Input } from '@angular/core';
import { Equipe } from '../models/equipe';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent {
  @Input() equipe:Equipe= new Equipe();
  @Input() indice:number =0;

  entrepriseService: any;
  constructor(entrepriseService : EntrepriseService) {
    this.entrepriseService = entrepriseService;
  }
}
