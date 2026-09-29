import { List as MantineList, Stack, Text } from '@mantine/core'
import Checkbox from '../Checkbox/Checkbox'
import Tag from '../Tag/Tag'
import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Title, { TitleScope } from '../Title/Title'

function Mutation({ item }) {
  return (
    <Card>
      <ItemHeader
        title={item.name}
        tier={item.tier}
        tags={
          <>
            <Tag tag={item.category} />
            <Tag tag={item.active ? 'Active' : 'Passive'} />
          </>
        }
      />

      {Array.isArray(item.ranks) && item.ranks.length > 0 && (
        <TitleScope>
          <Stack>
            <MantineList listStyleType="none">
              {item.ranks.map((rankInfo, index) => (
                <MantineList.Item key={`${item.name}-rank-${index}`}>
                  <Stack>
                    <Title title={`Rank ${rankInfo.rank}`} />
                    <Checkbox
                      checkboxKey={`mutation-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${rankInfo.rank}`}
                      icon="🔓"
                      label={`Unlock rank ${rankInfo.rank}`}
                    />
                    <Text>{rankInfo.effect}</Text>
                    <Text>Obtained: {rankInfo.obtained}</Text>
                  </Stack>
                </MantineList.Item>
              ))}
            </MantineList>
          </Stack>
        </TitleScope>
      )}
    </Card>
  )
}

export default Mutation
