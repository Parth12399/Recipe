import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { recipe } from './recipe.model';
import * as fromApp from '../store/app.reducer';
import * as RecipeAction from './store/recipe.action';
import { map, switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<recipe[]>{
    constructor(private store: Store<fromApp.AppState>, private actions$: Actions) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('recipes').pipe(take(1), map(recipesState => {
            return recipesState.recipes;
        }),
        switchMap(recipes => {
            if(recipes.length === 0) {
                this.store.dispatch(new RecipeAction.FetchRecipes());
                return this.actions$.pipe(ofType(RecipeAction.SET_RECIPES), take(1));
            } else {
                return of(recipes);
            }
        }));
    }

    
}