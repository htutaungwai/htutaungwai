const pTag = document.querySelector("p");

const url =
  "https://api.themoviedb.org/3/movie/524434?api_key=845e81600d9d504ee9e6e2f1b08dee9f";

const getMovieGenre = async () => {
  const response = await fetch(url);
  const responseData = await response.json();

  const genres = responseData.genres;

  genres.forEach((genre) => {
    console.log(genre.id + " : " + genre.name);
    // It shows all of four genre ids and name
    pTag.innerHTML += genre.id + " : " + genre.name;
    // It only shows the last genre id and name ----- Why?????
  });
};

getMovieGenre();
