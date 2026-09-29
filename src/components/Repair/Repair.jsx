import './Repair.css'
import Title from '../Title/Title'

function Repair({ repairs = [], itemName = 'item' }) {
  if (!Array.isArray(repairs) || repairs.length === 0) {
    return null
  }

  return (
    <div className="repair">
      <Title title="Repair" className="repair__title" />
      <ul className="repair__list">
        {repairs.map((entry, index) => {
          const name = entry?.name ?? entry?.ingredient ?? entry?.item ?? String(entry)
          const quantity = entry?.quantity

          return (
            <li className="repair__item" key={`${itemName}-repair-${name}-${index}`}>
              {quantity !== undefined ? `${name}: ${quantity}` : name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Repair
