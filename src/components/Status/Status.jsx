import Card from '../Card/Card'
import Icon from '../Icon/Icon'
import ItemHeader from '../ItemHeader/ItemHeader'
import Tag from '../Tag/Tag'
import Accordion from '../Accordion/Accordion'
import './Status.css'
import Title from '../Title/Title'

function Status({ item }) {
  return (
    <Card className="status-card">
      <ItemHeader
        title={item.name}
        icon={<Icon className="status-card__icon" src={item.icon} alt={item.name} />}
        tags={item.categories.map((category) => <Tag key={category} tag={category} />)}
      />

      <Accordion summary="Details">
        <div className="status-card__content">
          <p className="status-card__description">{item.description}</p>
          <p className="status-card__details">{item.details}</p>
        </div>

        {item.sources.length > 0 && (
          <div className="status-card__sources">
            <Title title="Sources" className="status-card__sources-title" />
            <ul>
              {item.sources.map((source) => <li key={source}>{source}</li>)}
            </ul>
          </div>
        )}
      </Accordion>
    </Card>
  )
}

export default Status
