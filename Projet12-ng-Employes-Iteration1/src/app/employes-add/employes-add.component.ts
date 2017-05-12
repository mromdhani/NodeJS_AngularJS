import { Component, OnInit } from '@angular/core';
import { Employe } from "app/employe";
import { EmployesService } from "app/employes.service";

@Component({
  selector: 'app-employes-add',
  templateUrl: './employes-add.component.html',
  styleUrls: ['./employes-add.component.css']
})
export class EmployesAddComponent implements OnInit {

   employe : Employe = {nom:"", poste:"", age:0};

  constructor(private _service : EmployesService) { }

  ngOnInit() {
  }

  ajouterEmployer():void {
    //this._service.addOneEmploye(this.employe);
     this._service.addOneEmploye(Object.assign({},this.employe));
   //  this._service.addOneEmploye(Object.create(this.employe));
  }

}
