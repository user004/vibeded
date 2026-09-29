import { useContext } from 'react'
import armor from '../../data/armor.json'
import Armor, { getArmorCheckboxKey } from '../Armor/Armor'
import Card from '../Card/Card'
import Tooltip from '../Tooltip/Tooltip'
import List from '../List/List'
import ItemHeader from '../ItemHeader/ItemHeader'
import Checkbox from '../Checkbox/Checkbox'
import { FieldGuideContext } from '../../context/FieldGuideContext'

function ArmorSet({ setName, items }) {
  const { checkboxState, setCheckboxChecked } = useContext(FieldGuideContext)
  const pieces = items ?? armor.filter((item) => item.set?.name === setName)

  if (pieces.length === 0) {
    return null
  }

  const bonus = pieces.find((item) => item.set?.bonus != null)?.set.bonus
  const tier = pieces.find((item) => item.tier != null)?.tier
  const checked = pieces.every((item) => Boolean(checkboxState[getArmorCheckboxKey(item.name)]))

  return (
    <Card>
      <ItemHeader
        title={setName}
        tier={tier}
        checkboxes={
          <Checkbox
            checkboxKey={`armor-set-${setName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            icon="🔨"
            label="Crafted"
            checked={checked}
            onChange={(nextChecked) => {
              for (const item of pieces) {
                setCheckboxChecked(getArmorCheckboxKey(item.name), nextChecked)
              }
            }}
          />
        }
        tags={bonus != null &&
          <>
            Set Bonus:
            <Tooltip name={bonus} />
          </>}
      />

      <List
        columns={3}
        items={pieces}
        renderItem={(item) => <Armor item={item} />}
      />
    </Card>
  )
}

export default ArmorSet
