import Recipe from '../Recipe/Recipe'
import Title from '../Title/Title'

function RecipeList({ recipes = [], itemName = 'item' }) {
  const normalizedRecipes = Array.isArray(recipes) ? recipes : []

  return (
    <ul className="grid gap-3">
      {normalizedRecipes.map((recipe, index) => (
        <li className="grid gap-3 rounded-lg border p-4" key={`${itemName}-recipe-${index}`}>
          <Title
            title={`Recipe${normalizedRecipes.length > 1 ? ` ${index + 1}` : ''}`}
          />
          <Recipe recipe={recipe} itemName={itemName} recipeIndex={index} />
        </li>
      ))}
    </ul>
  )
}

export default RecipeList
