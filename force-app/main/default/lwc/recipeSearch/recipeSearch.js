import { LightningElement } from "lwc";
import getRandomRecipe from "@salesforce/apex/Spoonacular.getRandomRecipe";
import getRecipeByIngredients from "@salesforce/apex/Spoonacular.getRecipeByIngredients";

export default class RecipeSearch extends LightningElement {
  recipes = [];
  fetchRandomRecipe() {
    getRandomRecipe()
      .then((data) => {
        this.recipes =
          JSON.parse(data) && JSON.parse(data).recipes
            ? JSON.parse(data).recipes
            : [];
      })
      .catch((error) => {
        console.error(error);
      });
  }

  fetchRecipesByIngredients() {
    const ingredients = this.template.querySelector(".ingredient-input").value;
    console.log(ingredients);
    getRecipeByIngredients({ ingredients })
      .then((data) => {
        console.log(data);
        this.recipes = JSON.parse(data);
        console.log('this.recipes'+this.recipes);
        console.log('Summary'+ this.recipes.summary);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}