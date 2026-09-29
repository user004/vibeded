import { Chip } from '@mui/material'

function Tag({ tag }) {
  return <Chip label={tag} size="small" variant="outlined" color="primary" />
}

export default Tag
