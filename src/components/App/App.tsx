import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getRecipes } from '../../store/reducers/recipes';

import Home from '../Home';
import Menu from '../Menu';
import Recipe from '../Recipe';
import Error from '../Error';

import Loading from './Loading';

import './App.scss';

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const loading = useAppSelector((state) => state.recipes.loading);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // à chaque changement de page*

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
