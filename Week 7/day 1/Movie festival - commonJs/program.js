
Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
    this.numOfMovies++;
}
function Program(date) {
    this.date = new Date(date).toDateString();
    this.listOfMovies = [];
    this.numOfMovies = 0;



}
Program.prototype.getDataProgram = function () {
    var moviesLength = 0;
    var movieList = '';
    for (var i = 0; i < this.listOfMovies.length; i++) {
        var a = this.listOfMovies[i];
        moviesLength += a.movieLength;
        movieList += a.getDataMovie() + '\n\t\t';
    }
    return this.date + ', program length is ' + moviesLength + 'min \n\t\t' + movieList;
}

module.exports.Program = Program;