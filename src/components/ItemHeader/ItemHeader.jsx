import Tier from '../Tier/Tier'
import Title from '../Title/Title'
import './ItemHeader.css'

function ItemHeader({ title, tier, icon, checkboxes, tags }) {
  return (
    <header className="item-header">
      {icon ?
        <div className="icon">{icon}</div> :
        tier && <Tier tier={tier} />}
      <Title title={title} className="title" />
      {checkboxes &&
        <div className="checks">{checkboxes}</div>}
      {tags &&
        <div className="meta">{tags}</div>}
    </header>
  )
}

export default ItemHeader
