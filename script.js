const main = document.getElementById('main')
const search = document.getElementById('search')
const movieList = document.getElementById('movie-list')

function displayDetails (title) {
  console.log('title', title)
  const movie = movies.find(movie => {
    return movie.title === title
  })
  console.log('movie', movie)
  const details = `
    <button onclick="window.location.reload()">Back</button>
    <h1>${title}</h1>
    <img src="${movie.image}" />
    <h4>${movie.plot}</h4>
    <p>Cast: ${movie.cast}</p>
  `
  main.innerHTML = details
}

function displayCards (movies) {
  const cards = movies.map(movie => {
    return `
      <div class='movie-card' onclick="displayDetails('${movie.title}')"> 
        <h2>${movie.title}</h2>
        <img src="${movie.image}" style="width: 100%" />
        <div>Genre: ${movie.genre}</div>
        <div>Director: ${movie.director}</div>
      </div>
    `
  })
  movieList.innerHTML = cards
}

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
  displayCards(filtered)
})

displayCards(movies)