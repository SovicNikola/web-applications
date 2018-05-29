function Genre(name) {
    this.name = name;

}
Genre.prototype.getDataGenre = function () {

    var firstLetter = this.name.charAt(0).toUpperCase();
    var lastLetter = this.name.charAt(this.name.length - 1).toUpperCase();
    return firstLetter.concat(lastLetter);
}

module.exports.Genre = Genre;