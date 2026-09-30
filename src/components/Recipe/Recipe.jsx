
function Recipe({ recipe, itemName, recipeIndex }) {
  const ingredients = Array.isArray(recipe?.ingredients)
    ? recipe.ingredients
    : Array.isArray(recipe)
      ? recipe
      : []

  return (
    <div className="grid gap-2">
      {recipe?.station && <p className="text-muted-foreground">Station: {recipe.station}</p>}
      {ingredients.length > 0 && (
        <ul className="grid gap-2">
          {ingredients.map((entry, index) => {
            const name = entry?.name ?? entry?.ingredient ?? entry?.item ?? String(entry)
            const quantity = entry?.quantity

            return (
              <li className="flex justify-between gap-3 rounded-lg bg-muted p-2" key={`${itemName}-recipe-${recipeIndex}-${name}-${index}`}>
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
