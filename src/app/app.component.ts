import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true, // <-- this is required!
  imports: [RouterOutlet, NavComponent],
  template: `
    <app-nav></app-nav>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'FoodRecipes';
}
