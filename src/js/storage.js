const FAVORITES_KEY = 'favorites';

export function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch (error) {
    return [];
  }
}

export function toggleFavorite(exerciseId) {
  if (!exerciseId) return;
  const favorites = getFavorites();
  const index = favorites.indexOf(exerciseId);

  if (index >= 0) {
    favorites.splice(index, 1);
  } else {
    favorites.push(exerciseId);
  }

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}
