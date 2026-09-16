import Tier from '../Tier/Tier'
import './ItemHeader.css'

function ItemHeader({ title, tier, checkboxes, tags }) {
  return (
    <header className="item-header">
      {tier &&
        <Tier tier={tier} />}
      <h3 className="title">{title}</h3>
      {checkboxes &&
        <div className="checks">{checkboxes}</div>}
      {tags &&
        <div className="meta">{tags}</div>}
    </header>
  )
}

export default ItemHeader
