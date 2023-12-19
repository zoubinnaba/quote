import { useState, useRef } from 'react';
import './App.css';
import { useFetch } from '../src/hooks/useFetch.jsx';
import leftQuote from '../src/assets/left-quote.png';

function App() {
  const quoteRef = useRef();

  const { error, data, refetch } = useFetch(
    `https://api.quotable.io/quotes/random`
  );

  const handleButtonClick = () => {
    //console.log('click');
    refetch(); // Utilisez la fonction refetch pour obtenir une nouvelle citation
  };

  if (data) {
    quoteRef.current = data[0];
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {data && (
        <Quote
          key={quoteRef.current._id}
          content={quoteRef.current.content}
          author={quoteRef.current.author}
          onButtonClick={handleButtonClick}
        />
      )}
    </div>
  );
}

function Quote({ id, content, author, onButtonClick }) {
  const style = {
    width: '15px',
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96">
      <div className="px-6 py-4" id={id}>
        <div className="font-bold text-xl mb-2">
          <img style={style} src={leftQuote} alt="left quote" />
          {content}
        </div>
        <p className="text-gray-700 text-base">- {author}</p>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <Button onClick={onButtonClick} />
      </div>
    </div>
  );
}

const Button = ({ onClick }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
      Suivant
    </button>
  );
};

export default App;
