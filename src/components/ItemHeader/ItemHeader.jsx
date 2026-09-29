import Tier from '../Tier/Tier'
import Title from '../Title/Title'
import Stack from 'react-bootstrap/Stack'

function ItemHeader({ title, tier, icon, checkboxes, tags }) {
  return (
    <Stack as="header" direction="horizontal" gap={2} className="flex-wrap mb-3">
      {icon || (tier && <Tier tier={tier} />)}
      <Title title={title} className="me-auto" />
      {checkboxes && <Stack direction="vertical" gap={2}>{checkboxes}</Stack>}
      {tags && <Stack direction="horizontal" gap={1} className="flex-wrap">{tags}</Stack>}
    </Stack>
  )
}

export default ItemHeader
