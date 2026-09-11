import './Recipe.css'

function Recipe({ recipe, itemName, recipeIndex }) {
  const ingredients = Array.isArray(recipe?.ingredients)
    ? recipe.ingredients
    : Array.isArray(recipe)
      ? recipe
      : []

  return (
    <div className="recipe">
      {recipe?.station && <p className="recipe__station">Station: {recipe.station}</p>}
      {ingredients.length > 0 && (
        <ul className="recipe__ingredients">
          {ingredients.map((entry, index) => {
            const name = entry?.name ?? entry?.ingredient ?? entry?.item ?? String(entry)
            const quantity = entry?.quantity

            return (
              <li className="recipe__ingredient" key={`${itemName}-recipe-${recipeIndex}-${name}-${index}`}>
                <span>{name}</span>
                <span>{quantity !== undefined ? quantity : '—'}</span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Recipe
