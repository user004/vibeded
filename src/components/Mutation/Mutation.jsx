import Checkbox from '../Checkbox/Checkbox'
import Tag from '../Tag/Tag'
import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Title, { TitleScope } from '../Title/Title'

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
            <ul className="grid gap-3">
              {item.ranks.map((rankInfo, index) => (
                <li className="grid gap-2 rounded-lg border bg-muted/50 p-3" key={`${item.name}-rank-${index}`}>
                  <Title title={`Rank ${rankInfo.rank}`} />
                  <Checkbox
                    checkboxKey={`mutation-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${rankInfo.rank}`}
                    icon="🔓"
                    label={`Unlock rank ${rankInfo.rank}`}
                  />
                  <p>{rankInfo.effect}</p>
                  <p>Obtained: {rankInfo.obtained}</p>
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
