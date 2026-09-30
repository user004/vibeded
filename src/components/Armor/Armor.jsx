import RecipeList from '../RecipeList/RecipeList'
import Repair from '../Repair/Repair'
import Tag from '../Tag/Tag'
import Checkbox from '../Checkbox/Checkbox'
import Accordion from '../Accordion/Accordion'
import ItemHeader from '../ItemHeader/ItemHeader'
import Card from '../Card/Card'
import Tooltip from '../Tooltip/Tooltip'

export const getArmorCheckboxKey = (name) =>
  `armor-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

function Armor({ item }) {
  const checkboxKey = getArmorCheckboxKey(item.name)

  return (
    <Card>
      <ItemHeader
        title={item.name}
        tier={item.tier}
        checkboxes={<Checkbox checkboxKey={checkboxKey} icon="🔨" label="Crafted" />}
        tags={
          <>
            {item.archetype != null && <Tag tag={item.archetype} />}
            <Tag tag={item.slot} />
          </>
        }
      />

      <Accordion summary="Details">
        <div className="grid grid-cols-3 gap-3">
          <div className="grid gap-1 rounded-lg bg-muted p-3">
            <span className="text-xs text-muted-foreground">DUR</span>
            <p>{item.durability}</p>
          </div>
          <div className="grid gap-1 rounded-lg bg-muted p-3">
            <span className="text-xs text-muted-foreground">DEF</span>
            <p>{item.defense}</p>
          </div>
          <div className="grid gap-1 rounded-lg bg-muted p-3">
            <span className="text-xs text-muted-foreground">RES</span>
            <p>{item.resistance}</p>
          </div>
        </div>

        {item.pieceEffect && (
          <p>
            Piece Effect: <Tooltip name={item.pieceEffect} />
          </p>
        )}
        {item.sleekEffect != null && (
          <p>
            Sleek Effect: <Tooltip name={item.sleekEffect} />
          </p>
        )}

        {Array.isArray(item.recipes) && item.recipes.length > 0 && (
          <RecipeList recipes={item.recipes} itemName={item.name} />
        )}

        <Repair repairs={item.repair} itemName={item.name} />
      </Accordion>
    </Card>
  )
}

export default Armor
