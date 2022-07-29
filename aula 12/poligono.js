class Poligono {


    constructor(lados, altura, largura) {
        this.lados = lados;
        this.altura = altura;
        this.largura = largura;
    }

    getArea(largura, altura) {
        return (this.largura * this.altura);
    }

}