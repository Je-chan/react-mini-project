import React, { useEffect, useState } from 'react';
import './App.css';
import FullScreenMessage from './components/shared/FullScreenMessage';

function App() {
  const [weddingData, setWeddingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // 1. wedding data 호출
  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (!response.ok) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.');
        } else {
          return response.json();
        }
      })
      .then((data) => setWeddingData(data))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <FullScreenMessage type={'loading'} />;
  }

  if (isError) {
    return <FullScreenMessage type={'error'} />;
  }

  return <div>{JSON.stringify(weddingData)}</div>;
}

export default App;
