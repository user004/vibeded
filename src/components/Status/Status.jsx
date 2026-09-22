import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Tag from '../Tag/Tag'
import Accordion from '../Accordion/Accordion'
import './Status.css'

function Status({ item }) {
  return (
    <Card className="status-card">
      <ItemHeader
        title={item.name}
        icon={<img className="status-card__icon" src={item.icon} alt="" />}
        tags={item.categories.map((category) => <Tag key={category} tag={category} />)}
      />

      <Accordion summary="Details">
        <div className="status-card__content">
          <p className="status-card__description">{item.description}</p>
          <p className="status-card__details">{item.details}</p>
        </div>

        {item.sources.length > 0 && (
          <div className="status-card__sources">
            <h4 className="status-card__sources-title">Sources</h4>
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
