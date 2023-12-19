import { useState } from 'react'
import './App.css'
import { useFetch } from '../src/hooks/useFetch.jsx'
import leftQuote from '../src/assets/left-quote.png'

function App() {
  //const [count, setCount] = useState(1)
  const {error, data} = useFetch(
    `https://api.quotable.io/quotes/random`
  )
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {data && data.map(quote => (<Quote key={quote._id} content={quote.content} author={quote.author}/>))}
    </div>

  )
}


function Quote({id, content, author}) {
  const style = {
      width: '15px'
  }
  const {error, data, fetchData} = useFetch(
      `https://api.quotable.io/quotes/random`
    )

    const handleButtonClick = () => {
      console.log('click')
      // Mettez à jour la citation lorsqu'on clique sur le bouton
      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          {data && data.map(quote => (<Quote key={quote._id} content={quote.content} author={quote.author}/>))}
        </div>
    
      )
    }
  return <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96">
  <div className="px-6 py-4" id={id}>
    <div className="font-bold text-xl mb-2">
      <img style={style} src={leftQuote} alt="left quote" />
      {content}
      </div>
    <p className="text-gray-700 text-base">- {author}</p>
  </div>
  <div className="px-6 py-4 flex justify-between">
  <Button onClick={handleButtonClick}/>
</div>
</div>
}

const Button = ({ onClick }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
    Suivant
  </button>
  );
};

export default App
