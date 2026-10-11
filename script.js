const form = document.getElementById("movie_form");
const titleInput = document.getElementById("movie_title");
const genreSelect = document.getElementById("movie_genre");
const message = document.getElementById("error_message");
const movieList = document.getElementById("movie_list");
const emptyMessage = document.getElementById("empty_message");

const watchlist = {
    movies: [{ title: "The Princess Bride", genre: "Adventure", watched: false }],
    toggleWatched(index) {
        this.movies[index].watched = !this.movies[index].watched;
    },
    removeMovie(index) {
        this.movies.splice(index, 1);
    }
};

function saveMovies() {
  // TODO (Step 6)
}

function loadMovies() {
  // TODO (Step 6)
}

function renderMovies() {
    movieList.replaceChildren();

    watchlist.movies.forEach((movie, index) => {
        movieList.appendChild(createMovieCard(movie, index));
    });
}

function createMovieCard(movie, index) {
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

    watch_button.addEventListener("click", () => {
        watchlist.toggleWatched(index);
        saveMovies();     // no-op until Step 6
        renderMovies();
    });

    remove_button.addEventListener("click", () => {
        watchlist.removeMovie(index);
        saveMovies();     // no-op until Step 6
        renderMovies();
    });

    return item;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value.trim();
    const genre = genreSelect.value;

    if (title === "") {
        message.textContent = "Please enter a movie title.";
        return;
    }

    if (genre === "") {
        message.textContent = "Please select a genre.";
        return;
    }

    message.textContent = "";

    watchlist.movies.push({ title: title, genre: genre, watched: false });
    saveMovies();
    renderMovies();

    form.reset();
});

loadMovies();
renderMovies();