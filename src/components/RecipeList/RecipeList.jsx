import Recipe from '../Recipe/Recipe'
import './RecipeList.css'

function RecipeList({ recipes = [], itemName = 'item' }) {
  const normalizedRecipes = Array.isArray(recipes) ? recipes : []

  return (
    <ul className="recipe-list">
      {normalizedRecipes.map((recipe, index) => (
        <li className="recipe-list__item" key={`${itemName}-recipe-${index}`}>
          <h4 className="recipe-list__title">
            Recipe{normalizedRecipes.length > 1 ? ` ${index + 1}` : ''}
          </h4>
          <Recipe recipe={recipe} itemName={itemName} recipeIndex={index} />
        </li>
      ))}
    </ul>
  )
}

export default RecipeList
