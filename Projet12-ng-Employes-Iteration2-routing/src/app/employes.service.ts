import { Injectable } from '@angular/core';
import { Employe } from "app/employe";

@Injectable()
export class EmployesService {

  employes: Employe[];

  constructor() {
    this.employes = [
      { nom: "Fahmi BEZZAOUIA", poste: "Formateur permanent", age: 40 },
      { nom: "Sami AYADI", poste: "Formateur permanent", age: 40 },
      { nom: "Brahim OUESLATI", poste: "Formateur permanent", age: 30 },
      { nom: "Hanen OUESLATI", poste: "Formateur permanent", age: 18 },
    ];
  }

  getAllEmployes(): Employe[] {
    return this.employes;
  }

  addOneEmploye(emp: Employe): void {
    this.employes.push(emp);
  }
  deleteOneEmploye(emp: Employe): void {
    let position = this.employes.indexOf(emp);
    this.employes.splice(position, 1);

  }

}
