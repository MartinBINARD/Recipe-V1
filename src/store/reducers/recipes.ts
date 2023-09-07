import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { Recipe } from '../../@types/recipe';

interface RecipesState {
  loading: boolean;
  list: Recipe[];
}
export const initialState: RecipesState = {
  loading: false,
  list: [],
};

export const getRecipes = createAsyncThunk('recipes/fetch', async () => {
  const { data } = await axios.get<Recipe[]>(
    'https://orecipes-api.onrender.com/api/recipes'
  );

  return data;
});

const recipesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getRecipes.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getRecipes.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    })
    .addCase(getRecipes.rejected, (state, action) => {
      state.loading = false;
      // Messaged 'erreur
      alert('ERROR');
    });
});

export default recipesReducer;
