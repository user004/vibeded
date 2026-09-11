import creatures from '../../data/creatures.json'
import Creature from '../Creature/Creature'

function CreatureList() {
  return (
    <ul>
      {creatures.map((item) => (
        <li key={item.name}>
          <Creature item={item} />
        </li>
      ))}
    </ul>
  )
}

export default CreatureList
