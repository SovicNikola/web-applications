
'use strict';
(
    function () {
        var genreModule = require('./genre.js');
        var movieModule = require('./movie.js');
        var programModule = require('./program.js');
        var festivalModule = require('./Festival.js');
        ``
        function createMovie(title, genre, movieLength) {
            //genre kao string 
            var genre = new genreModule.Genre(genre);
            return new movieModule.Movie(title, genre, movieLength);
        }

        function createProgram(date) {
            return new programModule.Program(date);
        }

        var bekstvo = createMovie.call(new movieModule.Movie, 'The Shawshank Redemption', 'drama', '130min');
        var taxi = createMovie.call(new movieModule.Movie, 'Taxi', 'comedy', '150min');
        var gospodar = createMovie.apply(new movieModule.Movie, ['Gospodar prstenova', 'drama', '200min'])
        var UmriMuski = createMovie.apply(new movieModule.Movie, ['Umri muski', 'action', '115min']);
        var smrtonosnoOruzije = createMovie.call(new movieModule.Movie, 'Smrtonosno oruzije', 'comedy', '121min');
        var rambo = createMovie.apply(new movieModule.Movie, ['rambo', 'comedy', '85min']);


        var program = createProgram.call(new programModule.Program, '6/5/2018');
        var program2 = createProgram.apply(new programModule.Program, ['6/6/2018']);

        var festival = new festivalModule.Festival('Deca srece festival');

        program.addMovie(bekstvo);
        program.addMovie(taxi);
        program.addMovie(gospodar);
        program.addMovie(UmriMuski);
        program2.addMovie(smrtonosnoOruzije);
        program2.addMovie(rambo);
        festival.addProgram(program);
        festival.addProgram(program2);

        console.log(festival.getDataFestival());

    }
)();