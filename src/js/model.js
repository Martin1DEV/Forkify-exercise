import { URL } from './config';

export const state = {
  recipe: {},
  query: '',
  recipes: [],
};

export const loadRecipe = async function (id) {
  try {
    if (!id) return;
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
  } catch (err) {
    throw err;
  }
};

export const loadSearch = async function (search) {
  state.query = search;
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
  );
  const data = await res.json();
  const { recipes } = data.data;
  state.recipes = recipes.map(rec => {
    return {
      publisher: rec.publisher,
      imageURL: rec.image_url,
      title: rec.title,
      id: rec.id,
    };
  });
  console.log(state.recipes);
};
