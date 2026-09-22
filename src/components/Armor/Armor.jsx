import RecipeList from '../RecipeList/RecipeList'
import Repair from '../Repair/Repair'
import Tag from '../Tag/Tag'
import Checkbox from '../Checkbox/Checkbox'
import Accordion from '../Accordion/Accordion'
import ItemHeader from '../ItemHeader/ItemHeader'
import Card from '../Card/Card'
import Tooltip from '../Tooltip/Tooltip'
import './Armor.css'

function Armor({ item }) {
  const checkboxKey = `armor-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <Card className="armor-card">
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
        <div className="armor-card__stats">
          <div className="armor-card__stat">
            <span className="armor-card__stat-label">DUR</span>
            <p className="armor-card__stat-value">{item.durability}</p>
          </div>
          <div className="armor-card__stat">
            <span className="armor-card__stat-label">DEF</span>
            <p className="armor-card__stat-value">{item.defense}</p>
          </div>
          <div className="armor-card__stat">
            <span className="armor-card__stat-label">RES</span>
            <p className="armor-card__stat-value">{item.resistance}</p>
          </div>
        </div>

        {item.pieceEffect && (
          <p className="armor-card__text">
            Piece Effect: <Tooltip name={item.pieceEffect} />
          </p>
        )}
        {item.sleekEffect != null && (
          <p className="armor-card__text">
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
