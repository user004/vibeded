import Recipe from '../Recipe/Recipe'

function RecipeList({ recipes = [], itemName = 'item' }) {
  const normalizedRecipes = Array.isArray(recipes) ? recipes : []

  return (
    <ul>
      {normalizedRecipes.map((recipe, index) => (
        <li key={`${itemName}-recipe-${index}`}>
          <h4>Recipe{normalizedRecipes.length > 1 ? ` ${index + 1}` : ''}</h4>
          <Recipe recipe={recipe} itemName={itemName} recipeIndex={index} />
        </li>
      ))}
    </ul>
  )
}

export default RecipeList
