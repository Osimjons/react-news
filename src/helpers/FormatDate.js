function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export const FormatDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return capitalizeWords(
    date.toLocaleDateString('ru-RU', options).slice(0, -2)
  );
};
