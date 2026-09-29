import RecipeList from '../RecipeList/RecipeList'
import Tag from '../Tag/Tag'
import Checkbox from '../Checkbox/Checkbox'
import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Accordion from '../Accordion/Accordion'
import Title from '../Title/Title'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

function Resource({ item }) {
  const checkboxKey = `resource-analyzed-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <Card>
      <ItemHeader
        title={item.name}
        tier={item.tier}
        checkboxes={<Checkbox checkboxKey={checkboxKey} icon="🧪" label="Analyzed" />}
        tags={<Tag tag={item.category} />}
      />

      <Accordion summary="Details">
        <Row className="g-3">
          {Array.isArray(item.creatures) && item.creatures.length > 0 && (
            <Col>
              <Title title="Creatures" className="mb-2" />
              <ListGroup as="ul">
                {item.creatures.map((creature, index) => (
                  <ListGroup.Item as="li" key={`${item.name}-creature-${index}`}>{creature}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          )}

          {Array.isArray(item.locations) && item.locations.length > 0 && (
            <Col>
              <Title title="Locations" className="mb-2" />
              <ListGroup as="ul">
                {item.locations.map((location, index) => (
                  <ListGroup.Item as="li" key={`${item.name}-location-${index}`}>{location}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          )}
        </Row>

        {Array.isArray(item.recipes) && item.recipes.length > 0 && (
          <RecipeList recipes={item.recipes} itemName={item.name} />
        )}
      </Accordion>
    </Card>
  )
}

export default Resource
