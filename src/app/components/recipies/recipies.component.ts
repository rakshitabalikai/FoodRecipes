
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-recipies',
  imports: [CommonModule,RouterLink],
  templateUrl: './recipies.component.html',
  styleUrl: './recipies.component.scss'
})
export class RecipiesComponent implements OnInit {
  recipe = {
    title: "Ground Beef Mexican Tacos",
    subtitle: "Let’s Cook",
    cuisine: "Mexican Food",
    servings: 4,
    prepTime: "15 Minutes",
    cookTime: "10 Minutes",
    difficulty: "Intermediate Level",
    description: `Savor the bold and savory flavors of our Ground Beef Tacos! The impeccably seasoned ground beef, nestled in warm tortillas, creates a symphony of tastes complemented by vibrant toppings like crisp lettuce, juicy tomatoes, and a dollop of zesty salsa. This recipe promises a fiesta of textures and tastes, making it a perfect choice for a quick and delicious weeknight meal.`,
    tags: ["Mexican Food", "Tacos", "Spicy", "Seafood", "Featured Recipe"],
    ingredients: [
      "1 lb ground beef 70–80% lean",
      "2 tbsp olive oil",
      "1 tsp smoked paprika",
      "1 tsp cumin",
      "1/2 tsp cayenne pepper",
      "Salt and pepper to taste",
      "8 small flour tortillas",
      "1 cup shredded lettuce",
      "1 cup diced tomatoes",
      "1/2 cup chopped red onion",
      "1/4 cup chopped fresh cilantro",
      "1 avocado, sliced"
    ],
    nutrition: {
      Calories: "320",
      Protein: "25g",
      Fat: "15g",
      Fiber: "5g",
      Sugars: "2g",
      Carbohydrates: "20g"
    },
    image: "assets/images/tacos.jpg",
    chefImage: "assets/images/chef.jpg",
    chefName: "Chef Maria Rodriguez"
  };

  constructor() {}

  ngOnInit(): void {}
}
