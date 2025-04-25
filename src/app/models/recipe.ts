export interface Recipe {
    id?: string;
    title: string;
    subtitle: string;
    cuisine: string;
    servings: number;
    prepTime: string;
    cookTime: string;
    difficulty: string;
    description: string;
    tags: string[];
    ingredients: string[];
    nutrition: {
      Calories: string;
      Protein: string;
      Fat: string;
      Fiber: string;
      Sugars: string;
      Carbohydrates: string;
    };
    image: string;
    chefImage: string;
    chefName: string;
  }