import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../recipes.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-instructions',
  standalone: true, // <-- you must add standalone if it's not already
  imports: [CommonModule, RouterModule],
  providers: [RecipeService], // <-- ADD THIS LINE
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
  recipe!: Recipe;

  constructor(
    private route: ActivatedRoute, // works now
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');
    if (recipeId) {
      this.recipeService.getRecipeById(recipeId).subscribe({
        next: (data) => {
          this.recipe = data;
        },
        error: (err) => {
          console.error('Error fetching recipe:', err);
        }
      });
    }
  }
}
