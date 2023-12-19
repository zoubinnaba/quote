import leftQuote from '../assets/left-quote.png'
import { useFetch } from '../hooks/useFetch.jsx'
//import Button from './Button.jsx'
export default function Quote({id, content, author}) {
    const style = {
        width: '15px'
    }
    const {error, data, fetchData} = useFetch(
        `https://api.quotable.io/quotes/random`
      )
    return <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96">
    <div className="px-6 py-4" id={id}>
      <div className="font-bold text-xl mb-2">
        <img style={style} src={leftQuote} alt="left quote" />
        {content}
        </div>
      <p className="text-gray-700 text-base">- {author}</p>
    </div>
    <div className="px-6 py-4 flex justify-between">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={fetchData}>
      Suivant
    </button>
  </div>
  </div>
}