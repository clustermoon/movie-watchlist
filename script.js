const form = document.getElementById("movie_form");
const titleInput = document.getElementById("movie_title");
const genreSelect = document.getElementById("movie_genre");
const message = document.getElementById("error_message");
const movieList = document.getElementById("movie_list");
const emptyMessage = document.getElementById("empty_message");

const watchlist = {
    movies: [{ title: "The Princess Bride", genre: "Adventure", watched: false }],
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
    movieList.replaceChildren();

    watchlist.movies.forEach((movie) => {
        movieList.appendChild(createMovieCard(movie));
    });
}

function createMovieCard(movie) {
        const item = document.createElement("li");
    const card = document.createElement("div");
    card.className = "movie_card";

    const heading = document.createElement("h3");
    heading.className = "movie_title";
    heading.textContent = movie.title;

    const details = document.createElement("p");
    details.className = "movie_details";

    const genre_span = document.createElement("span");
    genre_span.className = "movie_genre";
    genre_span.textContent = movie.genre;

    const status_span = document.createElement("span");
    status_span.className = "watch_status";
    status_span.textContent = movie.watched ? "Watched" : "Not Watched";

    details.appendChild(genre_span);
    details.appendChild(status_span);

    const actions = document.createElement("div");
    actions.className = "movie_actions";

    const watch_button = document.createElement("button");
    watch_button.textContent = movie.watched ? "Mark Unwatched" : "Mark Watched";
    watch_button.type = "button";

    const remove_button = document.createElement("button");
    remove_button.textContent = "Remove";
    remove_button.type = "button";

    actions.appendChild(watch_button);
    actions.appendChild(remove_button);

    card.appendChild(heading);
    card.appendChild(details);
    card.appendChild(actions);
    item.appendChild(card);

    // Toggle watched: update the movie object AND the display
    watch_button.addEventListener("click", () => {
        movie.watched = !movie.watched;
        status_span.textContent = movie.watched ? "Watched" : "Not Watched";
        watch_button.textContent = movie.watched ? "Mark Unwatched" : "Mark Watched";
    });

    // Remove: take it out of the array AND the page
    remove_button.addEventListener("click", () => {
        movies.splice(movies.indexOf(movie), 1);
        movie_list.removeChild(item);
    });

    return item;
}

form.addEventListener("submit", (event) => {
  // TODO (Step 5)
});

loadMovies();
renderMovies();