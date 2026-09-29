import { Image, List as MantineList, Stack, Text } from '@mantine/core'
import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Tag from '../Tag/Tag'
import Accordion from '../Accordion/Accordion'
import Title from '../Title/Title'

function Status({ item }) {
  return (
    <Card>
      <ItemHeader
        title={item.name}
        icon={<Image src={item.icon} alt="" w={32} h={32} />}
        tags={item.categories.map((category) => <Tag key={category} tag={category} />)}
      />

      <Accordion summary="Details">
        <Stack>
          <Text>{item.description}</Text>
          <Text>{item.details}</Text>
        </Stack>

        {item.sources.length > 0 && (
          <Stack>
            <Title title="Sources" />
            <MantineList>
              {item.sources.map((source) => <MantineList.Item key={source}>{source}</MantineList.Item>)}
            </MantineList>
          </Stack>
        )}
      </Accordion>
    </Card>
  )
}

export default Status
