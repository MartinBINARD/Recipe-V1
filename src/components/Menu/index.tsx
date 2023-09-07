import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

import './styles.scss';

function Menu() {
  const recipes = useAppSelector((state) => state.recipes.list);

  return (
    <nav className="menu">
      <Link className="menu-link menu-link--active" to="/">
        Accueil
      </Link>
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          className="menu-link"
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </Link>
      ))}
    </nav>
  );
}

export default Menu;
