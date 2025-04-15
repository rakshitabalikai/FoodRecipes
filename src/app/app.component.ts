import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavComponent,HomeComponent],
  template: `
    <app-nav></app-nav>
    <app-home></app-home>
    
   
    <p>hello there</p>
    <p>{{var1}}</p>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'FoodRecipes';
  var1=10;
}
