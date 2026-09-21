import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Tag from '../Tag/Tag'
import './Status.css'

function Status({ item }) {
  return (
    <Card className="status-card">
      <ItemHeader
        title={item.name}
        tags={item.categories.map((category) => <Tag key={category} tag={category} />)}
      />

      <div className="status-card__body">
        <img className="status-card__icon" src={item.icon} alt="" />
        <div className="status-card__content">
          <p className="status-card__description">{item.description}</p>
          <p className="status-card__details">{item.details}</p>
        </div>
      </div>

      {item.sources.length > 0 && (
        <div className="status-card__sources">
          <h4 className="status-card__sources-title">Sources</h4>
          <ul>
            {item.sources.map((source) => <li key={source}>{source}</li>)}
          </ul>
        </div>
      )}
    </Card>
  )
}

export default Status
