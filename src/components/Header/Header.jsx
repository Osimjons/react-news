import { useState, useEffect } from 'react';
import { FormatDate } from '../../helpers/FormatDate';
import styles from './styles.module.css';
import { getWaether } from '../../api/apiWeather';
import { WeatherBlock } from '../WeatherBlock/WeatherBlock';

export const Header = () => {
  const [toDayDate, setToDayDate] = useState('');
  const [temperature, setTemperature] = useState([]);

  useEffect(() => {
    setToDayDate(FormatDate(new Date()));
  }, [toDayDate]);

  useEffect(() => {
    async function getTemperature() {
      const temperature = await getWaether();
      setTemperature(temperature);
    }
    getTemperature();
  }, []);
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerWrap}>
            <div className={styles.headerTitleBlock}>
              <h1 className={styles.headerTitle}>Daily News</h1>
              <p className={styles.headerDate}>{toDayDate}</p>
            </div>
            <WeatherBlock temperature={temperature} />
          </div>
        </div>
      </header>
    </>
  );
};
