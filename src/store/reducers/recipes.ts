import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { Recipe } from '../../@types/recipe';

interface RecipesState {
  list: Recipe[];
}
export const initialState: RecipesState = {
  list: [],
};

export const getRecipes = createAsyncThunk('recipes/get-recipes', async () => {
  const { data } = await axios.get(
    'https://orecipes-api.onrender.com/api/recipes'
  );

  return data;
});

const recipesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getRecipes.fulfilled, (state, action) => {
      state.list = action.payload;
    })
    .addCase(getRecipes.rejected, (state, action) => {
      console.log('action', action);
    });
});

export default recipesReducer;
