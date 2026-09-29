import { Box, SimpleGrid, Stack } from '@mantine/core'
import Title, { TitleScope } from '../Title/Title'

function List({ children, items, renderItem, title, columns = 1 }) {
  const listItems = children ?? (items ?? []).map((item, index) => (
    <Box component="li" key={item?.name ?? index}>{renderItem(item, index)}</Box>
  ))

  return (
    <Stack gap="md">
      {title && <Title title={title} />}
      <TitleScope>
        <SimpleGrid component="ul" cols={{ base: 1, sm: 2, lg: columns }} spacing="md" p={0} m={0}>
          {listItems}
        </SimpleGrid>
      </TitleScope>
    </Stack>
  )
}

export default List
