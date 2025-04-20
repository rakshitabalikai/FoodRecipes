import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { RecipiesComponent } from './components/recipies/recipies.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavComponent,HomeComponent,RecipiesComponent,AboutComponent],
  template: `
    <app-nav></app-nav>
    <!-- <app-home></app-home>
    <app-recipies></app-recipies>
    <app-about></app-about> -->
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'FoodRecipes';
  var1=10;
}
