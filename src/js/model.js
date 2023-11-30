import { URL } from './config';

export const state = {
  recipe: {},
  query: '',
};

export const loadRecipe = async function (id) {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await response.json();
    const { recipe } = data.data;
    // if (!recipe) return;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      servings: recipe.servings,
      url: recipe.source_url,
      image: recipe.image_url,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state);
  } catch (err) {
    throw err;
    //TODO-----------------add error handling and search
  }
};
