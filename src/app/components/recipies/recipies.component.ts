import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  provideHttpClient } from '@angular/common/http';  // <-- Import HttpClientModule
import { RecipeService } from '../../recipes.service';
import { Recipe } from '../../models/recipe';
import { RouterModule } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-recipies',
  standalone: true,  // Standalone component
  imports: [CommonModule, RouterModule],  // <-- Add HttpClientModule here
  // providers: [provideHttpClient()],
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss']
})
export class RecipiesComponent {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = []; // 👈 Add this for displaying

  @Input() category: string = 'All Types'; // 👈 This comes from HomeComponent

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe((data) => {
      this.recipes = data;
      this.applyFilter(); // 👈 After loading, apply initial filter
    });
  }

  ngOnChanges() {
    this.applyFilter(); // 👈 Whenever @Input() changes, apply filter
  }

  applyFilter() {
    if (!this.category || this.category === 'All Types') {
      this.filteredRecipes = this.recipes;
    } else {
      this.filteredRecipes = this.recipes.filter(recipe =>
        recipe.tags?.includes(this.category)
      );
    }
  }
}
