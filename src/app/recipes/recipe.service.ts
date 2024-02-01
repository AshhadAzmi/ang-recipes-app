import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class RecipeService{
  recipiesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //       'Tasty Schnitzel', 
    //       'A delicious and super-tasty schnitzel',
    //       'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1920px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
    //       [
    //         new Ingredient('Meat', 1),
    //         new Ingredient('French Fries', 20),
    //       ]),
    //     new Recipe(
    //       'Big Fat Burger', 
    //       'What else you want to say!', 
    //       'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/BK_Big_King_%282014%29_%28crop_and_color_balance_correction%29.jpg/1280px-BK_Big_King_%282014%29_%28crop_and_color_balance_correction%29.jpg',
    //       [
    //         new Ingredient('Buns', 2),
    //         new Ingredient('Meat', 1),
    //       ]),
        
    //   ];
    private recipes: Recipe[] = [];

      /**
       *
       */
      constructor(private slService: ShoppingListService) {
      }

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipiesChanged.next(this.recipes.slice());
      }

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipiesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipiesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipiesChanged.next(this.recipes.slice());
      }
}