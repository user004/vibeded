import { List as MantineList } from '@mantine/core'
import Title from '../Title/Title'

function Repair({ repairs = [], itemName = 'item' }) {
  if (!Array.isArray(repairs) || repairs.length === 0) {
    return null
  }

  return (
    <>
      <Title title="Repair" />
      <MantineList>
        {repairs.map((entry, index) => {
          const name = entry?.name ?? entry?.ingredient ?? entry?.item ?? String(entry)
          const quantity = entry?.quantity

          return (
            <MantineList.Item key={`${itemName}-repair-${name}-${index}`}>
              {quantity !== undefined ? `${name}: ${quantity}` : name}
            </MantineList.Item>
          )
        })}
      </MantineList>
    </>
  )
}

export default Repair
