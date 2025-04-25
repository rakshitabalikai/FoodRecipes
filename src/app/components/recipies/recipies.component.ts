import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // <-- Import HttpClientModule
import { RecipeService } from '../../recipes.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipies',
  standalone: true,  // Standalone component
  imports: [CommonModule, HttpClientModule],  // <-- Add HttpClientModule here
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss']
})
export class RecipiesComponent {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe((data) => {
      this.recipes = data;
    });
  }
}
