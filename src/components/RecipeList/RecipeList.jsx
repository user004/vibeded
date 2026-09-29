import Recipe from '../Recipe/Recipe'
import Title from '../Title/Title'
import ListGroup from 'react-bootstrap/ListGroup'

function RecipeList({ recipes = [], itemName = 'item' }) {
  const normalizedRecipes = Array.isArray(recipes) ? recipes : []

  return (
    <ListGroup as="ul" className="mb-3">
      {normalizedRecipes.map((recipe, index) => (
        <ListGroup.Item as="li" key={`${itemName}-recipe-${index}`}>
          <Title
            title={`Recipe${normalizedRecipes.length > 1 ? ` ${index + 1}` : ''}`}
            className="mb-2"
          />
          <Recipe recipe={recipe} itemName={itemName} recipeIndex={index} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default RecipeList
