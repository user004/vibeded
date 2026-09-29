import Recipe from '../Recipe/Recipe'
import Title from '../Title/Title'
import './RecipeList.css'

function RecipeList({ recipes = [], itemName = 'item' }) {
  const normalizedRecipes = Array.isArray(recipes) ? recipes : []

  return (
    <ul className="recipe-list">
      {normalizedRecipes.map((recipe, index) => (
        <li className="recipe-list__item" key={`${itemName}-recipe-${index}`}>
          <Title
            title={`Recipe${normalizedRecipes.length > 1 ? ` ${index + 1}` : ''}`}
            className="recipe-list__title"
          />
          <Recipe recipe={recipe} itemName={itemName} recipeIndex={index} />
        </li>
      ))}
    </ul>
  )
}

export default RecipeList
