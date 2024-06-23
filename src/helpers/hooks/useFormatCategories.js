export const useFormatCategories = (arr) => {
  return arr.map(
    (category) =>
      category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
  );
};
