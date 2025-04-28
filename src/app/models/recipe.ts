export interface Recipe {
  id: string;
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
  directions: string[]; // <-- ADD this line
  nutrition: { [key: string]: string };
  image: string;
  chefImage: string;
  chefName: string;
  rating: number;
}
