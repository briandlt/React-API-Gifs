import { useEffect, useState } from 'react'

const useGetGifs = (keyword = 'panda') => {
  const [gifs, setGifs] = useState([])
  useEffect(() => {
    const fetchGifs = async () => {
      const API = `https://api.giphy.com/v1/gifs/search?api_key=5QzeVrAO7ujS46NyG9a7j4b48ax9tfY7&q=${keyword}&limit=12&offset=0&rating=g&lang=es`;
      const response = await fetch(API)
      const { data } = await response.json();
      setGifs(data)
    }
    fetchGifs()
  }, [keyword])
  return {gifs}
}
export default useGetGifs