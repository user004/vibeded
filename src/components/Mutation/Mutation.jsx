import Checkbox from '../Checkbox/Checkbox'
import Tag from '../Tag/Tag'
import Card from '../Card/Card'
import './Mutation.css'
import ItemHeader from '../ItemHeader/ItemHeader'

function Mutation({ item }) {
  return (
    <Card className="mutation-card">
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
        <div>
          <ul className="mutation-card__ranks">
            {item.ranks.map((rankInfo, index) => (
              <li className="mutation-card__rank" key={`${item.name}-rank-${index}`}>
                <h4 className="mutation-card__rank-title">Rank {rankInfo.rank}</h4>
                <Checkbox
                  checkboxKey={`mutation-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${rankInfo.rank}`}
                  icon="🔓"
                  label={`Unlock rank ${rankInfo.rank}`}
                />
                <p className="mutation-card__text">{rankInfo.effect}</p>
                <p className="mutation-card__text">Obtained: {rankInfo.obtained}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  )
}

export default Mutation
