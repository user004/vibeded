import Checkbox from '../Checkbox/Checkbox'
import Tag from '../Tag/Tag'
import Card from '../Card/Card'
import './Mutation.css'
import ItemHeader from '../ItemHeader/ItemHeader'
import Title, { TitleScope } from '../Title/Title'

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
        <TitleScope>
          <div>
            <ul className="mutation-card__ranks">
              {item.ranks.map((rankInfo, index) => (
                <li className="mutation-card__rank" key={`${item.name}-rank-${index}`}>
                  <Title title={`Rank ${rankInfo.rank}`} className="mutation-card__rank-title" />
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
        </TitleScope>
      )}
    </Card>
  )
}

export default Mutation
