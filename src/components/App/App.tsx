import { Route, Routes } from 'react-router-dom';

import Home from '../Home';
import Menu from '../Menu';
import Recipe from '../Recipe';
import Error from '../Error';

import Loading from './Loading';

import data from '../../data';

import './App.scss';

interface AppProps {
  loading?: boolean;
}

function App({ loading }: AppProps) {
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Home />
      {/* <Recipe /> */}
      {/* <Error /> */}
    </div>
  );
}

export default App;
