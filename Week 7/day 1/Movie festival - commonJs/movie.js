
function Movie(title, genre, movieLength) {
    this.title = title;
    this.genre = genre;
    this.movieLength = parseInt(movieLength);


}

Movie.prototype.getDataMovie = function () {
    return this.title + ', ' + this.movieLength + ', ' + this.genre.getDataGenre();
}

module.exports.Movie = Movie;