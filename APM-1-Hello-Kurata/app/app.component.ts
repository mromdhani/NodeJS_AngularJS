import { Component } from '@angular/core';

@Component({
    selector: 'csft-app',
    template: '<h1 class="text text-primary">Bienvenue au CSFT, il fait {{temperature}} </h1>'
})
export class AppComponent { 
  
  public temperature : number = 28;

}
