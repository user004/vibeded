import RecipeList from '../RecipeList/RecipeList'
import Repair from '../Repair/Repair'
import Tag from '../Tag/Tag'
import Checkbox from '../Checkbox/Checkbox'
import Accordion from '../Accordion/Accordion'
import Card from '../Card/Card'
import './Weapon.css'
import ItemHeader from '../ItemHeader/ItemHeader'
import Tooltip from '../Tooltip/Tooltip'
import Title from '../Title/Title'

function Weapon({ item }) {
  const checkboxKey = `weapon-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <Card className="weapon-card">
      <ItemHeader
        title={item.name}
        tier={item.tier}
        checkboxes={<Checkbox checkboxKey={checkboxKey} icon="🔨" label="Crafted" />}
        tags={<Tag tag={item.category} />}
      />

      <Accordion summary="Details">
        {Array.isArray(item.status) && item.status.length > 0 && (
          <div className="weapon-card__section">
            <Title title="Status" className="weapon-card__heading" />
            <ul className="weapon-card__list">
              {item.status.map((status, index) => (
                <li className="weapon-card__list-item" key={`${item.name}-status-${index}`}>
                  <Tooltip name={status} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(item.recipes) && item.recipes.length > 0 && (
          <RecipeList recipes={item.recipes} itemName={item.name} />
        )}

        <Repair repairs={item.repair} itemName={item.name} />
      </Accordion>
    </Card>
  )
}

export default Weapon
