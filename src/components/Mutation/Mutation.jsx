import Checkbox from '../Checkbox/Checkbox'
import Tag from '../Tag/Tag'
import './Mutation.css'

function Mutation({ item }) {
  return (
    <article className="mutation-card">
      <h3 className="mutation-card__title">{item.name}</h3>
      <div className="mutation-card__summary">
        <Tag tag={item.category} />
        <Tag tag={item.active ? 'Active' : 'Passive'} />
      </div>

      {Array.isArray(item.ranks) && item.ranks.length > 0 && (
        <div>
          <ul className="mutation-card__ranks">
            {item.ranks.map((rankInfo, index) => (
              <li className="mutation-card__rank" key={`${item.name}-rank-${index}`}>
                <h4 className="mutation-card__rank-title">Rank {rankInfo.rank}</h4>
                <Checkbox
                  checkboxKey={`mutation-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${rankInfo.rank}`}
                  label="🔓"
                />
                <p className="mutation-card__text">{rankInfo.effect}</p>
                <p className="mutation-card__text">Obtained: {rankInfo.obtained}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export default Mutation
