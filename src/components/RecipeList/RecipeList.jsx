import { Stack } from '@mantine/core'
import Recipe from '../Recipe/Recipe'
import Title from '../Title/Title'

function RecipeList({ recipes = [], itemName = 'item' }) {
  const normalizedRecipes = Array.isArray(recipes) ? recipes : []

  return (
    <Stack>
      {normalizedRecipes.map((recipe, index) => (
        <Stack key={`${itemName}-recipe-${index}`}>
          <Title title={`Recipe${normalizedRecipes.length > 1 ? ` ${index + 1}` : ''}`} />
          <Recipe recipe={recipe} itemName={itemName} recipeIndex={index} />
        </Stack>
      ))}
    </Stack>
  )
}

export default RecipeList
