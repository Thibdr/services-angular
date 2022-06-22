import { Component } from '@angular/core';
import { EntrepriseService  } from './entreprise.service';
import { Equipe } from './models/equipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  entrepriseService: any;

  constructor(private entrepriseSrv: EntrepriseService){
    this.entrepriseService = entrepriseSrv;
  }


}
