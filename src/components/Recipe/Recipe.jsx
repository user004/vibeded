import ListGroup from 'react-bootstrap/ListGroup'

function Recipe({ recipe, itemName, recipeIndex }) {
  const ingredients = Array.isArray(recipe?.ingredients)
    ? recipe.ingredients
    : Array.isArray(recipe)
      ? recipe
      : []

  return (
    <div>
      {recipe?.station && <p><strong>Station:</strong> {recipe.station}</p>}
      {ingredients.length > 0 && (
        <ListGroup as="ul" className="mb-0">
          {ingredients.map((entry, index) => {
            const name = entry?.name ?? entry?.ingredient ?? entry?.item ?? String(entry)
            const quantity = entry?.quantity

            return (
              <ListGroup.Item as="li" key={`${itemName}-recipe-${recipeIndex}-${name}-${index}`}>
                {name}: {quantity !== undefined ? quantity : '—'}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      )}
    </div>
  )
}

export default Recipe
