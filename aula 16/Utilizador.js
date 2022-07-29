class Utilizador {
    books = [];
    constructor(name, genre, books) {
        this.name = name;
        this.genre = genre;
        this.books = books
    }
    
    toStringUti() {
        return `${this.name},${this.password},${this.genre}`
    }
    getName() {
        return this.name
    }
    getGenre() {
        return this.genre
    }
}