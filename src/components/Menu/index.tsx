import { useAppSelector } from '../../hooks/redux';

import './styles.scss';

function Menu() {
  const recipes = useAppSelector((state) => state.recipes.list);

  return (
    <nav className="menu">
      <a className="menu-link menu-link--active" href="/">
        Accueil
      </a>
      {recipes.map((recipe) => (
        <a
          key={recipe.id}
          className="menu-link"
          href={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </a>
      ))}
    </nav>
  );
}

export default Menu;
