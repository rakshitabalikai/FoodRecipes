import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'http://localhost:8082/api/recipes';

  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl);
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`);
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.baseUrl, recipe);
  }

  updateRecipe(id: string, recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.baseUrl}/${id}`, recipe);
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}