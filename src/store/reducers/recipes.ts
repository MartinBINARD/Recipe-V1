import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { Recipe } from '../../@types/recipe';

interface RecipesState {
  list: Recipe[];
}
export const initialState: RecipesState = {
  list: [],
};

export const getRecipes = createAsyncThunk('recipes/fetch', async () => {
  const { data } = await axios.get<Recipe[]>(
    'https://orecipes-api.onrender.com/api/recipes'
  );

  return data;
});

const recipesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getRecipes.fulfilled, (state, action) => {
    state.list = action.payload;
  });
});

export default recipesReducer;
