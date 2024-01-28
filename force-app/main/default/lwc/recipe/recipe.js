import { api, LightningElement } from 'lwc';
import getRecipe from "@salesforce/apex/Spoonacular.getRecipe";


export default class Recipe extends LightningElement {

@api text;
@api recipeId;
@api image;
@api summary;
@api price;
@api
  set dishTypes(data) {
    this.dishList = data && data.join();
  }
  get dishTypes() {
    return this.dishList;
  }
  @api
  set diets(data) {
    this.dietList = data && data.join();
  }
  get diets() {
    return this.dietList;
  }
  dishList;
  dietList;
fetchRecipe() {
    getRecipe({recipeId : this.recipeId })
    .then((data) =>{
        const recipe = JSON.parse(data);
        //console.log(recipe);
        if(data){
            this.image = recipe.image;
            this.price = recipe.pricePerServing;
            this.time = recipe.readyInMinutes;
            this.summary = recipe.summary;
            this.dishList = recipe.dishTypes && recipe.dishTypes.join();
            this.dietList = recipe.diets && recipe.diets.join();
            console.log('Image===='+this.image);
            console.log('this.summary'+this.summary);
        }
    })
    .catch((error) => {
        console.error(error);
      });
    
}
get hasDetails() {
    return this.summary ? true : false;
  }
}