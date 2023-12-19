import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch.jsx'
export default function Button() {
    //const [quote, setQuote] = useState('')
    
    function fetchData() {
        return {error, data} = useFetch(
            `https://api.quotable.io/quotes/random`
          )
    }
    return <div className="px-6 py-4 flex justify-between">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={fetchData}>
      Suivant
    </button>
  </div>
}