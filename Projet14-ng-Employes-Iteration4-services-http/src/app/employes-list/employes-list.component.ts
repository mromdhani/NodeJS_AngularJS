import { Component, OnInit } from '@angular/core';
import { Employe } from "app/employe";
import { EmployesService } from "app/employes.service";

@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {

  employes: Employe[];
  errorMessage: string;

  constructor(private _service: EmployesService) { }

  ngOnInit() {

    this._service.getAllEmployes().subscribe(emp => this.employes = emp,
      error => this.errorMessage = <any>error);
  }

  supprimerEmploye(emp: Employe): void {
    this._service.employes = this.employes;
    this._service.deleteOneEmploye(emp);

  }

}
