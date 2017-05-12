import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Employe } from "app/employe";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class EmployesService {

    employes: Employe[];
    errorMessage: string;

  private _employesUrl : string = 'http://localhost:3000/employes';

  constructor(private _http: Http) {
  }


  getAllEmployes(): Observable<Employe[]> {
     return this._http.get(this._employesUrl).map(resp => <Employe[]>resp.json());

  }
 
  addOneEmploye(emp: Employe): void {
     
      this.employes.push(emp);
  }
  deleteOneEmploye(emp: Employe): void {
    let position = this.employes.indexOf(emp);
    this.employes.splice(position, 1);

  }

}
