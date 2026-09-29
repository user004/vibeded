import Checkbox from '../Checkbox/Checkbox'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import { useContext } from 'react'
import Accordion from '../Accordion/Accordion'
import Tag from '../Tag/Tag'
import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Title from '../Title/Title'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

function Creature({ item }) {
  const { setCheckboxChecked } = useContext(FieldGuideContext)
  const peepedKey = `creature-peeped-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  const goldCardKey = `creature-gold-card-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  const handleGoldCardChange = (checked) => {
    setCheckboxChecked(goldCardKey, checked)
    if (checked) {
      setCheckboxChecked(peepedKey, true)
    }
  }

  const handlePeepedChange = (checked) => {
    setCheckboxChecked(peepedKey, checked)
    if (!checked) {
      setCheckboxChecked(goldCardKey, false)
    }
  }

  return (
    <Card>
      <ItemHeader
        title={item.name}
        tier={item.tier}
        checkboxes={
          <>
            <Checkbox checkboxKey={peepedKey} icon="👀" label="Peeped" onChange={handlePeepedChange} />
            <Checkbox checkboxKey={goldCardKey} icon="🥇" label="Gold" onChange={handleGoldCardChange} />
          </>
        }
        tags={
          <>
            <Tag tag={item.category} />
            {item.summonedWith && <Tag tag={`Summoned with ${item.summonedWith}`} />}
          </>
        }
      />

      <Accordion summary="Details">
        <Row className="g-3">
          {Array.isArray(item.environments) && item.environments.length > 0 && (
            <Col>
              <Title title="Environments" className="mb-2" />
              <ListGroup as="ul">
                {item.environments.map((environment, index) => (
                  <ListGroup.Item as="li" key={`${item.name}-environment-${index}`}>{environment}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          )}

          {Array.isArray(item.loot) && item.loot.length > 0 && (
            <Col>
              <Title title="Loot" className="mb-2" />
              <ListGroup as="ul">
                {item.loot.map((lootItem, index) => (
                  <ListGroup.Item as="li" key={`${item.name}-loot-${index}`}>{lootItem}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          )}
        </Row>
      </Accordion>
    </Card>
  )
}

export default Creature
