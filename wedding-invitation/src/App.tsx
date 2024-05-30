import React, { useEffect, useState } from 'react';
import './App.css';
import FullScreenMessage from '@shared/FullScreenMessage';
import Heading from '@components/sections/Heading';
import VideoSection from '@components/sections/VideoSection';
import { Wedding } from '@models/wedding';
import classNames from 'classnames';
import styles from './App.module.scss';
import { format } from 'date-fns';

const cx = classNames.bind(styles);

function App() {
  const [weddingData, setWeddingData] = useState<Wedding | null>(null);
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

  return (
    <div className={cx('container')}>
      <Heading date={weddingData?.date ?? format(new Date(), 'yyyy-MM-dd')} />
      <VideoSection />
    </div>
  );
}

export default App;
