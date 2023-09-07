import { Recipe } from '../../@types/recipe';
import './styles.scss';

function Card({ thumbnail, title, difficulty, slug }: Recipe) {
  return (
    <article className="card">
      <img className="card-img" src={thumbnail} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">Difficulté : {difficulty}</p>
        <a href={`/recipe/${slug}`} className="card-link">
          Voir la recette
        </a>
      </div>
    </article>
  );
}

export default Card;
