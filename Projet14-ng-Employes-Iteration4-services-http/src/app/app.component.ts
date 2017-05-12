import { Component } from '@angular/core';
import { EmployesService } from "app/employes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployesService]
})
export class AppComponent {
  title = 'app works!';
}
