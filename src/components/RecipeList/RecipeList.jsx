import Recipe from '../Recipe/Recipe'
import Title from '../Title/Title'
import { Box } from '@mui/material'

function RecipeList({ recipes = [], itemName = 'item' }) {
  const normalizedRecipes = Array.isArray(recipes) ? recipes : []

  return (
    <Box component="ul" sx={{ display: 'grid', gap: 1.5, p: 0, m: 0, listStyle: 'none' }}>
      {normalizedRecipes.map((recipe, index) => (
        <Box
          component="li"
          key={`${itemName}-recipe-${index}`}
          sx={{ display: 'grid', gap: 1.5, p: 2, border: 1, borderColor: 'divider', borderRadius: 2, bgcolor: 'action.hover' }}
        >
          <Title title={`Recipe${normalizedRecipes.length > 1 ? ` ${index + 1}` : ''}`} />
          <Recipe recipe={recipe} itemName={itemName} recipeIndex={index} />
        </Box>
      ))}
    </Box>
  )
}

export default RecipeList
