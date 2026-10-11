const form = document.getElementById("movie_form");
const titleInput = document.getElementById("movie_title");
const genreSelect = document.getElementById("movie_genre");
const message = document.getElementById("error_message");
const movieList = document.getElementById("movie_list");
const emptyMessage = document.getElementById("empty_message");

const watchlist = {
    movies: [],
    toggleWatched(index) {
        // TODO (Step 4)
    },
    removeMovie(index) {
        // TODO (Step 4)
    }
};

function saveMovies() {
  // TODO (Step 6)
}

function loadMovies() {
  // TODO (Step 6)
}

function renderMovies() {
  // TODO (Step 3)
}

form.addEventListener("submit", (event) => {
  // TODO (Step 5)
});

loadMovies();
renderMovies();