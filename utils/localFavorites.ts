const toggleFavorites = (id: number) => {

    console.log('toggle favorite llamado');

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokemon_id => (pokemon_id !== id))
    } else {
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

export default {
    toggleFavorites
}