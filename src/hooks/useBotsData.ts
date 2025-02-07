import { useEffect, useState } from 'react'

const LOCAL_STORAGE_KEY = 'botsData'

export const useBotsData = () => {
  const [data, setData] = useState<any | null>(null)

  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storedData) {
      setData(JSON.parse(storedData))
    } else {
      fetch('/data.min.json')
        .then((res) => res.json())
        .then((jsonData) => {
          setData(jsonData)
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jsonData))
        })
        .catch((error) => console.error('Error loading bots data:', error))
    }
  }, [])

  return data
}
