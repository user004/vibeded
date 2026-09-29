import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Tag from '../Tag/Tag'
import Accordion from '../Accordion/Accordion'
import Title from '../Title/Title'
import ListGroup from 'react-bootstrap/ListGroup'

function Status({ item }) {
  return (
    <Card>
      <ItemHeader
        title={item.name}
        icon={<img src={item.icon} alt="" width="32" height="32" />}
        tags={item.categories.map((category) => <Tag key={category} tag={category} />)}
      />

      <Accordion summary="Details">
        <p>{item.description}</p>
        <p>{item.details}</p>

        {item.sources.length > 0 && (
          <>
            <Title title="Sources" className="mb-2" />
            <ListGroup as="ul">
              {item.sources.map((source) => <ListGroup.Item as="li" key={source}>{source}</ListGroup.Item>)}
            </ListGroup>
          </>
        )}
      </Accordion>
    </Card>
  )
}

export default Status
