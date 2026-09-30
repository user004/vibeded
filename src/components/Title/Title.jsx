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

  return <Heading className={['font-semibold tracking-tight', level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : level === 3 ? 'text-xl' : 'text-base', className].filter(Boolean).join(' ')}>{title}</Heading>
}

export default Title
