const KEY = "favorites"

function addFavoriteCards(data) {

    let stringData = localStorage.getItem(KEY);
    if (stringData === null) {
        stringData = "{}";
    }
 
    let object = JSON.parse(stringData); 
    object[data._id] = data; 
    localStorage.setItem(KEY, JSON.stringify(object));
}

function getFavoriteCardById(id) {

    let stringData = localStorage.getItem(KEY);
    if (stringData === null) {
        return; 
    }
 
    let object = JSON.parse(stringData);
    return object[id];
}

function getAllFavoriteCards() {
    let stringData = localStorage.getItem(KEY);
    if (stringData === null) {
        return; 
    }
 
    let object = JSON.parse(stringData);
    return Object.values(object);
}

function deleteCard(id) {
    let stringData = localStorage.getItem(KEY);
    if (stringData === null) {
        return; 
    }
 
    let object = JSON.parse(stringData); 
    delete object[id]; 
    localStorage.setItem(KEY, JSON.stringify(object));
}

export { addFavoriteCards, getFavoriteCardById, getAllFavoriteCards, deleteCard };