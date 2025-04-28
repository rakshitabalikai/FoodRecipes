import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipiesComponent } from '../recipies/recipies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RecipiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedCategory: string = 'All Types'; // 🛠️ Add this

  setCategory(category: string) {
    this.selectedCategory = category; // 🛠️ Function to change category when button is clicked
  }
}
