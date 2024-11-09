export function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}

export function addToFavorites(exerciseId) {
  const favorites = getFavorites();
  favorites.push(exerciseId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function removeFromFavorites(exerciseId) {
  const favorites = getFavorites();
  const index = favorites.indexOf(exerciseId);
  if (index !== -1) {
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
