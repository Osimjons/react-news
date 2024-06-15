import { useState, useEffect } from 'react';
import { FormatDate } from '../../helpers/FormatDate';
import styles from './styles.module.css';

export const Header = () => {
  const [toDayDate, setToDayDate] = useState('');

  useEffect(() => {
    setToDayDate(FormatDate(new Date()));
  }, [toDayDate]);

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerWrap}>
            <div className={styles.headerTitleBlock}>
              <h1 className={styles.headerTitle}>Daily News</h1>
              <p className={styles.headerDate}>{toDayDate}</p>
            </div>
            <div className={styles.headerWeatherBlock}>
              <img src="#" alt="weather-icon" />
              <span>Weather </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
