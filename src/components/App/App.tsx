import { Route, Routes } from 'react-router-dom';

import Home from '../Home';
import Menu from '../Menu';
import Recipe from '../Recipe';
import Error from '../Error';

import Loading from './Loading';

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
        <Route to="/recipe/:slug" element={<Recipe />} />
        <Route to="*" element={<Error />} />
      </Routes>

      <Home />
      {/* <Recipe /> */}
      {/* <Error /> */}
    </div>
  );
}

export default App;
