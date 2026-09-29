import { Table, Text } from '@mantine/core'

function Recipe({ recipe, itemName, recipeIndex }) {
  const ingredients = Array.isArray(recipe?.ingredients)
    ? recipe.ingredients
    : Array.isArray(recipe)
      ? recipe
      : []

  return (
    <>
      {recipe?.station && <Text>Station: {recipe.station}</Text>}
      {ingredients.length > 0 && (
        <Table>
          <Table.Tbody>
            {ingredients.map((entry, index) => {
              const name = entry?.name ?? entry?.ingredient ?? entry?.item ?? String(entry)
              const quantity = entry?.quantity

              return (
                <Table.Tr key={`${itemName}-recipe-${recipeIndex}-${name}-${index}`}>
                  <Table.Td>{name}</Table.Td>
                  <Table.Td>{quantity !== undefined ? quantity : '—'}</Table.Td>
                </Table.Tr>
              )
            })}
          </Table.Tbody>
        </Table>
      )}
    </>
  )
}

export default Recipe
