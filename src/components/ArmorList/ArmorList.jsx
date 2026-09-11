import armor from '../../data/armor.json'
import Armor from '../Armor/Armor'

function ArmorList() {
  return (
    <ul>
      {armor.map((item) => (
        <li key={item.name}>
          <Armor item={item} />
        </li>
      ))}
    </ul>
  )
}

export default ArmorList
