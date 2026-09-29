import RecipeList from '../RecipeList/RecipeList'
import Accordion from '../Accordion/Accordion'
import Card from '../Card/Card'
import Checkbox from '../Checkbox/Checkbox'
import ItemHeader from '../ItemHeader/ItemHeader'
import Tag from '../Tag/Tag'
import Tooltip from '../Tooltip/Tooltip'
import Title from '../Title/Title'
import './Trinket.css'

function Trinket({ item }) {
  const checkboxKey = `trinket-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  const isCrafted = item.recipes.length > 0

  return (
    <Card className="trinket-card">
      <ItemHeader
        title={item.name}
        tier={item.tier}
        checkboxes={<Checkbox checkboxKey={checkboxKey} icon="🔨" label="Crafted" />}
        tags={item.categories.map((category) => <Tag key={category} tag={category} />)}
      />

      <Accordion summary="Details">
        <p className="trinket-card__description">{item.description}</p>

        {item.unlockedBy && <p className="trinket-card__text">Unlocked by: {item.unlockedBy}</p>}

        {item.perks.length > 0 && (
          <div className="trinket-card__section">
            <Title title="Perks" className="trinket-card__heading" />
            <ul className="trinket-card__list">
              {item.perks.map((perk) => (
                <li className="trinket-card__list-item" key={`${item.name}-${perk}`}>
                  <Tooltip name={perk} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.recipes.length > 0 && <RecipeList recipes={item.recipes} itemName={item.name} />}

        {item.sources.length > 0 && (
          <div className="trinket-card__section">
            <Title title={isCrafted ? 'Natural Source' : 'Sources'} className="trinket-card__heading" />
            <ul className="trinket-card__list">
              {item.sources.map((source) => <li key={`${item.name}-${source}`}>{source}</li>)}
            </ul>
          </div>
        )}
      </Accordion>
    </Card>
  )
}

export default Trinket
