import RecipeList from '../RecipeList/RecipeList'
import Repair from '../Repair/Repair'
import Tag from '../Tag/Tag'
import Checkbox from '../Checkbox/Checkbox'
import Accordion from '../Accordion/Accordion'
import ItemHeader from '../ItemHeader/ItemHeader'
import Card from '../Card/Card'
import Tooltip from '../Tooltip/Tooltip'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        <Row className="g-3 mb-3">
          <Col><strong>DUR</strong><p className="mb-0">{item.durability}</p></Col>
          <Col><strong>DEF</strong><p className="mb-0">{item.defense}</p></Col>
          <Col><strong>RES</strong><p className="mb-0">{item.resistance}</p></Col>
        </Row>

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
