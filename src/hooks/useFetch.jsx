// useFetch.jsx
import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  // Ajoutez la fonction refetch ici
  const refetch = () => {
    fetchData();
  };

  return { data, error, refetch };
}
