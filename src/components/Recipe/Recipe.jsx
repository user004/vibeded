function Recipe({ recipe, itemName, recipeIndex }) {
  const ingredients = Array.isArray(recipe?.ingredients)
    ? recipe.ingredients
    : Array.isArray(recipe)
      ? recipe
      : []

  return (
    <div>
      {recipe?.station && <p>Station: {recipe.station}</p>}
      {ingredients.length > 0 && (
        <ul>
          {ingredients.map((entry, index) => {
            const name = entry?.name ?? entry?.ingredient ?? entry?.item ?? String(entry)
            const quantity = entry?.quantity

            return (
              <li key={`${itemName}-recipe-${recipeIndex}-${name}-${index}`}>
                {quantity !== undefined ? `${name}: ${quantity}` : name}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Recipe
