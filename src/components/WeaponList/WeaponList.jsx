import weapons from '../../data/weapons.json'
import Weapon from '../Weapon/Weapon'

function WeaponList() {
  return (
    <ul>
      {weapons.map((item) => (
        <li key={item.name}>
          <Weapon item={item} />
        </li>
      ))}
    </ul>
  )
}

export default WeaponList
