import { Paper } from '@mui/material'

function Card({ children, className = '', sx, ...props }) {
  return (
    <Paper component="article" elevation={2} {...props} className={className} sx={[{ p: { xs: 2, sm: 3 }, display: 'grid', alignContent: 'start', gap: 2, height: '100%' }, sx]}>
      {children}
    </Paper>
  )
}

export default Card
