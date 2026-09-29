import { createContext, useContext } from 'react'

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
  const Heading = `h${level}`

  return <Heading className={className}>{title}</Heading>
}

export default Title
