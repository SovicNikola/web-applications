function Festival(name) {
    this.name = name;
    this.listOfProgram = [];
    this.numOfAllMovies = 0;

}
Festival.prototype.addProgram = function (program) {

    this.listOfProgram.push(program);
    this.numOfAllMovies += program.numOfMovies;
}

Festival.prototype.getDataFestival = function () {

    var result = this.name + ' has ' + this.numOfAllMovies + ' movie titles\n\t';
    for (var i = 0; i < this.listOfProgram.length; i++) {
        var programInfo = this.listOfProgram[i].getDataProgram() + '\n\t';
        result += programInfo;
    }
    return result;
}
module.exports.Festival = Festival;