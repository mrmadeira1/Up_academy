class Livro {
   
    constructor(image,title,descricao,links,id){
        this.image = image
        this.title = title
        this.descricao = descricao
        this.links = links
        this.id = id;
    }

    getNome (){
       return this.title
    }
    getImage() {
        return this.image
    }
    getId (){
        return this.id
    }
    getLink (){
        return this.links
    }
    toString (){
        return `${this.image},${this.title},${this.descricao},${this.links},${this.id}`
    }
}

