import Checkbox from '../Checkbox/Checkbox'
import Tag from '../Tag/Tag'
import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Title, { TitleScope } from '../Title/Title'
import ListGroup from 'react-bootstrap/ListGroup'

function Mutation({ item }) {
  return (
    <Card>
      <ItemHeader
        title={item.name}
        tier={item.tier}
        tags={
          <>
            <Tag tag={item.category} />
            <Tag tag={item.active ? 'Active' : 'Passive'} />
          </>
        }
      />

      {Array.isArray(item.ranks) && item.ranks.length > 0 && (
        <TitleScope>
          <div>
            <ListGroup as="ul">
              {item.ranks.map((rankInfo, index) => (
                <ListGroup.Item as="li" key={`${item.name}-rank-${index}`}>
                  <Title title={`Rank ${rankInfo.rank}`} className="mb-2" />
                  <Checkbox
                    checkboxKey={`mutation-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${rankInfo.rank}`}
                    icon="🔓"
                    label={`Unlock rank ${rankInfo.rank}`}
                  />
                  <p>{rankInfo.effect}</p>
                  <p className="mb-0">Obtained: {rankInfo.obtained}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </TitleScope>
      )}
    </Card>
  )
}

export default Mutation
