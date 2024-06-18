import styles from './styles.module.css';

export function SelectLanguage({ setLanguage, currentLanguage }) {
  return (
    <div className={styles.btnWrap}>
      <button
        disabled={currentLanguage === 'ru'}
        className={styles.langBtn}
        onClick={() => setLanguage('ru')}
      >
        Rus
      </button>
      <button
        disabled={currentLanguage === 'en'}
        className={styles.langBtn}
        onClick={() => setLanguage('en')}
      >
        Eng
      </button>
    </div>
  );
}
