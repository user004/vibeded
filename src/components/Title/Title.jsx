import { createContext, useContext } from 'react'
import { Title as MantineTitle } from '@mantine/core'

const TitleLevelContext = createContext(1)

export function TitleScope({ children }) {
  const level = useContext(TitleLevelContext)

  return (
    <TitleLevelContext.Provider value={Math.min(level + 1, 6)}>
      {children}
    </TitleLevelContext.Provider>
  )
}

function Title({ title }) {
  const level = useContext(TitleLevelContext)

  return <MantineTitle order={level}>{title}</MantineTitle>
}

export default Title
