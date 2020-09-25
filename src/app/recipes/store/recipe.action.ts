import { Action } from '@ngrx/store';
import { recipe } from '../recipe.model';

export const SET_RECIPES = '[recipe] Set Recipes';
export const FETCH_RECIPES = '[recipe] Fetch Recipes';
export const ADD_RECIPE = '[recipe] Add Recipe';
export const UPDATE_RECIPE = '[recipe] Update Recipe';
export const DELETE_RECIPE = '[recipe] Delete Recipe';
export const STORE_RECIPES = '[recipe] Store Recipe';

export class SetRecipes implements Action {
    readonly type = SET_RECIPES;

    constructor(public payload: recipe[]) {}
}

export class FetchRecipes implements Action {
    readonly type = FETCH_RECIPES;
}

export class AddRecipe implements Action {
    readonly type = ADD_RECIPE;
    constructor(public payload: recipe) {}
}

export class UpdateRecipe implements Action {
    readonly type = UPDATE_RECIPE;
    constructor(public payload: {index: number; newRecipe: recipe}) {}
}

export class DeleteRecipe implements Action {
    readonly type = DELETE_RECIPE;
    constructor(public payload: number) {}
}

export class StoreRecipes implements Action {
    readonly type = STORE_RECIPES;
}

export type RecipeActions = 
    | SetRecipes 
    | FetchRecipes 
    | AddRecipe 
    | UpdateRecipe 
    | DeleteRecipe
    | StoreRecipes;