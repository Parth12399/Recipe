import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';
import { map, switchMap } from 'rxjs/operators';
import * as RecipeActions from '../store/recipe.action';
import * as ShoppActions from '../../shopping-list/store/shopping-list.action';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  animations: [
    trigger('state', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('shrunken', style({
        transform: 'scale(0)'
      })),
      transition('* => shrunken', animate(900))
    ])
  ],
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  state = 'normal';
  recipe: recipe;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => {
          return +params['id'];
        }), 
        switchMap(id => {
          this.id = id;
          return this.store.select('recipes');
        }), 
        map(recipesState => {
          return recipesState.recipes.find((recipe, index) => {
          return index === this.id;
          });
        })
      )
      .subscribe(recipe => {
                this.recipe = recipe;
      });
  }


  onAddToShoopingList() {
    this.store.dispatch(new ShoppActions.AddIngredients(this.recipe.ingredients));
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
    this.state = 'shrunken';
  }
}
