import { Group } from '@mantine/core'
import Tier from '../Tier/Tier'
import Title from '../Title/Title'

function ItemHeader({ title, tier, icon, checkboxes, tags }) {
  return (
    <Group component="header" gap="sm" justify="space-between" wrap="wrap">
      <Group gap="sm" wrap="wrap">
        {icon || (tier != null && <Tier tier={tier} />)}
        <Title title={title} />
      </Group>
      {(checkboxes || tags) && (
        <Group gap="sm" wrap="wrap">
          {checkboxes}
          {tags}
        </Group>
      )}
    </Group>
  )
}

export default ItemHeader
