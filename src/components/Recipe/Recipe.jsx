import { Box, Typography } from '@mui/material'

function Recipe({ recipe, itemName, recipeIndex }) {
  const ingredients = Array.isArray(recipe?.ingredients)
    ? recipe.ingredients
    : Array.isArray(recipe)
      ? recipe
      : []

  return (
    <Box sx={{ display: 'grid', gap: 1 }}>
      {recipe?.station && <Typography variant="body2" color="text.secondary">Station: {recipe.station}</Typography>}
      {ingredients.length > 0 && (
        <Box component="ul" sx={{ display: 'grid', gap: 1, p: 0, m: 0, listStyle: 'none' }}>
          {ingredients.map((entry, index) => {
            const name = entry?.name ?? entry?.ingredient ?? entry?.item ?? String(entry)
            const quantity = entry?.quantity

            return (
              <Box
                component="li"
                key={`${itemName}-recipe-${recipeIndex}-${name}-${index}`}
                sx={{ display: 'flex', justifyContent: 'space-between', gap: 1.5, p: '0.5rem 1rem', borderRadius: 2, bgcolor: 'action.hover', color: 'text.secondary' }}
              >
                <Typography component="span" variant="body2">{name}</Typography>
                <Typography component="span" variant="body2">{quantity !== undefined ? quantity : '—'}</Typography>
              </Box>
            )
          })}
        </Box>
      )}
    </Box>
  )
}

export default Recipe
