import { createContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'grounded2FieldGuideData'

export const FieldGuideContext = createContext(null)

function readStoredCheckboxState() {
  if (typeof window === 'undefined') {
    return {}
  }

  const storedValue = window.localStorage.getItem(STORAGE_KEY)

  if (!storedValue) {
    return {}
  }

  try {
    const parsed = JSON.parse(storedValue)
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

export function FieldGuideProvider({ children }) {
  const [checkboxState, setCheckboxState] = useState(readStoredCheckboxState)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checkboxState))
  }, [checkboxState])

  const value = useMemo(
    () => ({
      checkboxState,
      setCheckboxChecked: (key, checked) =>
        setCheckboxState((current) => ({
          ...current,
          [key]: checked,
        })),
    }),
    [checkboxState],
  )

  return <FieldGuideContext.Provider value={value}>{children}</FieldGuideContext.Provider>
}
