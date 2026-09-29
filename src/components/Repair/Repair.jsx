import Title from '../Title/Title'
import ListGroup from 'react-bootstrap/ListGroup'

function Repair({ repairs = [], itemName = 'item' }) {
  if (!Array.isArray(repairs) || repairs.length === 0) {
    return null
  }

  return (
    <div className="mt-3">
      <Title title="Repair" className="mb-2" />
      <ListGroup as="ul">
        {repairs.map((entry, index) => {
          const name = entry?.name ?? entry?.ingredient ?? entry?.item ?? String(entry)
          const quantity = entry?.quantity

          return (
            <ListGroup.Item as="li" key={`${itemName}-repair-${name}-${index}`}>
              {quantity !== undefined ? `${name}: ${quantity}` : name}
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  )
}

export default Repair
