import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import RecipeView from './views/recipeView';
import SearchView from './views/searchView';
import ResultsView from './views/resultsView';
// const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const recipeController = async function () {
  try {
    const id = window.location.hash.slice(1);
    await model.loadRecipe(id);
    RecipeView.render(model.state.recipe);
  } catch (err) {
    RecipeView.renderError(err.message);
  }
};

const searchControler = async function (search) {
  try {
    await model.loadSearch(search);
    ResultsView.clear();
    ResultsView.render(model.state.recipes);
  } catch (err) {
    alert(err);
  }
};

const init = function () {
  RecipeView.addHandlerRecipe(recipeController);
  SearchView.addHandlerSearch(searchControler);
};

init();
