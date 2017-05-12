import { Component, OnInit } from '@angular/core';
import { Employe } from "app/employe";
import { EmployesService } from "app/employes.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-employes-add',
  templateUrl: './employes-add.component.html',
  styleUrls: ['./employes-add.component.css']
})
export class EmployesAddComponent implements OnInit {

  employe: Employe = { nom: "", poste: "", age: 0 };

  constructor(private _service: EmployesService, private _router: Router) { }

  ngOnInit() {
  }

  ajouterEmployer(): void {
    //this._service.addOneEmploye(this.employe);  <--- Un bug ici car les composants sont des singletons
    // Il faut ajouter une nouvelle copie de l'objet (un clone) !
    this._service.addOneEmploye(Object.assign({}, this.employe));
    // Envoyer la route pour la vue liste
    let link = ['/list'];
    this._router.navigate(link);
  }

}
