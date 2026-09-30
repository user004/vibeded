import Title from '../Title/Title'

function Repair({ repairs = [], itemName = 'item' }) {
  if (!Array.isArray(repairs) || repairs.length === 0) {
    return null
  }

  return (
    <div className="grid gap-2">
      <Title title="Repair" />
      <ul className="grid gap-2">
        {repairs.map((entry, index) => {
          const name = entry?.name ?? entry?.ingredient ?? entry?.item ?? String(entry)
          const quantity = entry?.quantity

          return (
            <li className="rounded-lg bg-muted p-2" key={`${itemName}-repair-${name}-${index}`}>
              {quantity !== undefined ? `${name}: ${quantity}` : name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Repair
