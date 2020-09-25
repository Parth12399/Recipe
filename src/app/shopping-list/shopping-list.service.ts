// import { ingredient } from '../shared/ingredient.model';
// import { Subject } from 'rxjs';



// export class ShoppingListService {
//     ingredientsChange = new Subject<ingredient []>();
//     startedEditing = new Subject<number>();
//     private ingredients: ingredient[] = [
//         new ingredient('Apples', 5),
//         new ingredient('Tomatoes', 10),
//       ];

//     getIngredients() {
//         return this.ingredients.slice();
//     }

//     getIngredient(index: number) {
//         return this.ingredients[index];
//     }

//     addIngredient(ingredient: ingredient) {
//         this.ingredients.push(ingredient);
//         this.ingredientsChange.next(this.ingredients.slice());
//     }

//     addIng(ingredients: ingredient[]){
//         // for(let ingredient of ingredients) {
//         //     this.addIngredient(ingredient);
//         // }
//         this.ingredients.push(...ingredients);
//         this.ingredientsChange.next(this.ingredients.slice());
//     }

//     updateIngredient(index: number, newIngredient: ingredient) {
//         this.ingredients[index] = newIngredient;
//         this.ingredientsChange.next(this.ingredients.slice());
//     }

//     deleteIngredient(index: number) {
//         this.ingredients.splice(index, 1);
//         this.ingredientsChange.next(this.ingredients.slice());
//     }
// }