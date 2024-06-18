import styles from './styles.module.css';

export const WeatherBlock = ({ temperature }) => {
  return (
    <>
      <div className={styles.headerWeatherBlock}>
        <img
          className={styles.headerWeatherBlockIcon}
          src={` https://openweathermap.org/img/wn/${temperature.weather?.[0]?.icon}@2x.png`}
          alt="weather-icon"
        />
        <span>{Math.round(temperature.main?.temp) + '℃'} </span>
        <p>{temperature.name}</p>
      </div>
    </>
  );
};
