import { Component, OnInit } from '@angular/core';
import { Employe } from "app/employe";
import { EmployesService } from "app/employes.service";

@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {

   employes : Employe[] ;
     
  constructor(private _service:EmployesService) { }

  ngOnInit() {
    this.employes = this._service.getAllEmployes();
  }

}
