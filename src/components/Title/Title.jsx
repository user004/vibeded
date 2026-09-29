import { createContext, useContext } from 'react'
import { Typography } from '@mui/material'

const TitleLevelContext = createContext(1)

export function TitleScope({ children }) {
  const level = useContext(TitleLevelContext)

  return (
    <TitleLevelContext.Provider value={Math.min(level + 1, 6)}>
      {children}
    </TitleLevelContext.Provider>
  )
}

function Title({ title, className }) {
  const level = useContext(TitleLevelContext)
  const variant = ['h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1'][level - 1]
  return <Typography component={`h${level}`} variant={variant} color="primary" className={className} sx={{ overflowWrap: 'anywhere' }}>{title}</Typography>
}

export default Title
