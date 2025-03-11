abstract class PecaXadrez{

    tipo:string;
    posicao:string;

    constructor(tipo:string,posicao:string){

        this.tipo=tipo;      // rei, torre ou peao
        this.posicao=posicao;

    }

    abstract movimentoValido(novaPosicao:string):boolean;  // eu achei q n tinha metodo abstrato desse jeito, m

    getPeca():string{ // "metodo abstrato" pra depois retornar qual tipo é
    
        return 'oiRodrigo';

    }

}

export default PecaXadrez;



