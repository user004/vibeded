import armor from '../../data/armor.json'
import Armor from '../Armor/Armor'
import Card from '../Card/Card'
import Tooltip from '../Tooltip/Tooltip'
import List from '../List/List'
import './ArmorSet.css'
import ItemHeader from "../ItemHeader/ItemHeader.jsx";

function ArmorSet({ setName, items }) {
  const pieces = items ?? armor.filter((item) => item.set?.name === setName)

  if (pieces.length === 0) {
    return null
  }

  const bonus = pieces.find((item) => item.set?.bonus != null)?.set.bonus
  const tier = pieces.find((item) => item.tier != null)?.tier;

  return (
    <Card className="armor-set-card">
      <ItemHeader
        title={setName}
        tier={tier}
        tags={bonus != null &&
          <>
            Set Bonus:
            <Tooltip name={bonus} />
          </>}
      />

      <List
        className="armor-set-card__pieces"
        columns={3}
        items={pieces}
        renderItem={(item) => <Armor item={item} />}
      />
    </Card>
  )
}

export default ArmorSet
