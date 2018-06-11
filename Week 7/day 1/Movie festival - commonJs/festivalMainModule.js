'use strict';
(
    function () {
        var movie = require('./movieModule.js');
        var moduleGenre = require('./moduleGenre.js');
        var moduleProgram = require('./moduleProgram.js');
        var moduleFestival = require('./moduleFestival.js')





        function createMovie(title, genre, movieLength) {
            //genre kao string 
            var genre = new moduleGenre.Genre(genre);
            return new movie.Movie(title, genre, movieLength);
        }

        function createProgram(date) {
            return new moduleProgram.Program(date);
        }

        var bekstvo = createMovie.call(new movie.Movie, 'The Shawshank Redemption', 'drama', '130min');
        var taxi = createMovie.call(new movie.Movie, 'Taxi', 'comedy', '150min');
        var gospodar = createMovie.apply(new movie.Movie, ['Gospodar prstenova', 'drama', '200min'])
        var UmriMuski = createMovie.apply(new movie.Movie, ['Umri muski', 'action', '115min']);
        var smrtonosnoOruzije = createMovie.call(new movie.Movie, 'Smrtonosno oruzije', 'comedy', '121min');
        var rambo = createMovie.apply(new movie.Movie, ['rambo', 'comedy', '85min']);


        var program = createProgram.call(new moduleProgram.Program, '6/5/2018');
        var program2 = createProgram.apply(new moduleProgram.Program, ['6/6/2018']);

        var festival = new moduleFestival.Festival('Deca srece festival');

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
)()
