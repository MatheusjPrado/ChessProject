import PecaXadrez from './PecaXadrez.js';

class Torre extends PecaXadrez{

    constructor(posicao:string){

        super('torre',posicao);

    }

    movimentoValido(novaPosicao:string):boolean{ 

        let colunaAtual=this.posicao[0].toUpperCase();
        let linhaAtual=parseInt(this.posicao[1]);
        let novaColuna=novaPosicao[0].toUpperCase();
        let novaLinha=parseInt(novaPosicao[1]);


        if(colunaAtual===novaColuna || linhaAtual===novaLinha)return true;

        return false;

    }
  
    getPeca():string{

        return 'T';

    }

}

export default Torre;


