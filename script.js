const main = document.getElementById('main')
const search = document.getElementById('search')
const movieList = document.getElementById('movie-list')

console.log('movies', movies)

const cards = movies.map(movie => {
  return `
    <div class='movie-card'> 
      <h2>${movie.title}</h2>
      <img src="${movie.image}" style="width: 100%" />
      <div>Genre: ${movie.genre}</div>
      <div>Director: ${movie.director}</div>
    </div>
  `
})
movieList.innerHTML = cards

search.addEventListener('input', (event) => {
  const lowerValue = event.target.value.toLowerCase()
  const filtered = movies.filter(movie => {
    const parts = [movie.title, movie.genre, movie.director, ...movie.cast]
    const match = parts.find(part => {
      const lowerPart = part.toLowerCase()
      return lowerPart.includes(lowerValue)
    })
    return match
  })
  console.log('filtered', filtered)
})