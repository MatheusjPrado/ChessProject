import PecaXadrez from './PecaXadrez.js';

class Peao extends PecaXadrez{  // herança

    constructor(posicao:string){

        super('peao',posicao);

    }

    movimentoValido(novaPosicao:string):boolean{

        let colunaAtual=this.posicao[0].toUpperCase(); // isso daqui faz com que ele pegue a posição 0 da string e coloque em cacha alta. Ex: a->A
        let linhaAtual= parseInt(this.posicao[1]); // pego a posição 1, que é o numero mas faz parte de uma string e retorno como inteiro
        let novaColuna=novaPosicao[0].toUpperCase(); 
        let novaLinha=parseInt(novaPosicao[1]);
    
        if(colunaAtual===novaColuna && novaLinha===linhaAtual+1)return true;
      
        return false;

    }
      
    getPeca():string{

        return "P";

    }

}

export default Peao;

