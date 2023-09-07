import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';

import { getRecipes } from '../../store/reducers/recipes';

function Home() {
  const recipes = useAppSelector((state) => state.recipes.list);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={recipes}
      />
    </Page>
  );
}

export default Home;
