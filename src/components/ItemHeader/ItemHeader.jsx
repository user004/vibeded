import Tier from '../Tier/Tier'
import Title from '../Title/Title'
import { CardHeader } from '../ui/card'

function ItemHeader({ title, tier, icon, checkboxes, tags }) {
  return (
    <CardHeader className="flex flex-wrap items-center gap-3">
      {icon ?
        <div className="size-8 shrink-0">{icon}</div> :
        tier && <Tier tier={tier} />}
      <Title title={title} className="min-w-0 flex-1" />
      {checkboxes &&
        <div className="flex flex-wrap gap-3">{checkboxes}</div>}
      {tags &&
        <div className="flex w-full flex-wrap items-center gap-2">{tags}</div>}
    </CardHeader>
  )
}

export default ItemHeader
