import { SetStateAction, useEffect, useState } from "react"

function useLocalStorage(itemName: string, initialValue: []) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState<any[]>(initialValue)
  
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = []
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
  
        setItem(parsedItem)
        setLoading(false)
      } catch (error: SetStateAction<any>) {
        setError(error)
        setLoading(false)
      }
    }, 3000)
  }, [])

  

  const saveItem = (newItem: SetStateAction<any>) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (error: SetStateAction<any>) {
      setError(error)
    }
  }

  return {
    item,
    saveItem,
    loading, 
    error
  }

}

export { useLocalStorage }