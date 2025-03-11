import PecaXadrez from './PecaXadrez.js';

function posicaoValida(posicao:string):number{          

    let coluna= posicao[0].toUpperCase();
    let linha= posicao[1];

    // ve se o primeiro e o segundo caractere da entrada é valido
    if((coluna==='A' || coluna==='B' || coluna==='C' || coluna==='D' || coluna==='E' || coluna==='F' || coluna==='G' || coluna==='H') && 
    (linha==='1' || linha==='2' || linha==='3' || linha==='4' || linha==='5' || linha==='6' || linha==='7' || linha==='8')){

        return 1;

    }

    return 0;

}


class Tabuleiro{

    pecas:PecaXadrez[];

    constructor(){

        this.pecas=[]; //array das peças

    }
    
    
    colocarPeca(peca:PecaXadrez,posicao:string):void{

        if(!posicaoValida(posicao)){

            console.log('\nPosição inválida :p');

            return;
        }
        
        
        if(this.pecaNaPosicao(posicao)){ 

            console.log(`\nJá existe uma peça na posição ${posicao} `);

            return;

        }
        
        peca.posicao=posicao;
        this.pecas.push(peca);  // isso add a peça no array de peças
        console.log(`\nA peça ${peca.tipo} foi colocada na posição ${posicao}`);

    }
    
    //essa funcao é usada pra ver se tem uma peça na posição informada
    pecaNaPosicao(posicao:string):boolean{

        for(let i=0;i<this.pecas.length;i++){

            if(this.pecas[i].posicao===posicao){   // compara se alguma das peças no array estão nessa posicao x
                
                return true; // encontrou uma peça na posição

            }
        }

        return false; // nao encontrou

    }

    

    moverPeca(posicaoAtual:string,novaPosicao:string):void{

        const peca= this.pecas.find(p=> p.posicao===posicaoAtual); 

        if(!peca){
            
            console.log(`\nnenhuma peca encontrada na posicao ${posicaoAtual}`);
            return;

        }
        
        if(!posicaoValida(novaPosicao)){

            console.log('\nposicao inserida eh inválida ');
            return;

        }
        
        if(peca.movimentoValido(novaPosicao)){

            console.log(`\nMovendo ${peca.tipo} de ${peca.posicao} para ${novaPosicao}`);
            peca.posicao=novaPosicao;

        }else{

            console.log(`\nMovimento inválido para ${peca.tipo} de ${peca.posicao} para ${novaPosicao}`);

        }

    }
    
    imprimirTabuleiro():void{
        
        let tabuleiro:string[][]=[];


        //cria o tabuleiro vazio
        for(let i=0;i<8;i++){

            tabuleiro[i]=[];

            for(let j=0;j<8;j++){

                tabuleiro[i][j]=' ';

            }

        }
      
        /*preciso calcular indices do array, fazendo que cada letra do alfabeto tenha um respectivo numero que o represente.
        Aqui usei um calculo usando a tabela ascii que eu diminuo o valor da da letra da coluna por 'A' que é o primeiro elemento
        da coluna, fazendo com que caso a coluna seja A, fique A-A=0 e o peao esteja na primeira coluna, se A-B=1, na segunda...*/
        for(let k=0;k<this.pecas.length;k++){

            let posicao=this.pecas[k].posicao;    // this.peca[k] esta armazenado o array de peças, ele pega a peça e acha sua posição
            let coluna= posicao[0].toUpperCase();  // pega o primeiro caractere (letra) e transforma em maiusculo
            let linha=parseInt(posicao[1]);       // pega o segundo caractere (numero)
          
            //calculo dos indices, através disso a peça pode ser alocada em algum x linha e y coluna
            let Ncoluna= coluna.charCodeAt(0)-'A'.charCodeAt(0);
            let Nlinha= 8-linha; // linha 8 -> índice 0, linha 7 -> índice 1, e assim vai indo
            
            tabuleiro[Nlinha][Ncoluna]= this.pecas[k].getPeca();

        }
      
        
        console.log("\n   A   B   C   D   E   F   G   H");
      
        
        // os dois for concatenam o conteudo das linhas e o console.log no final imprime
        for(let i=0;i<8;i++){

            let linhaPrint=(8-i)+" "; // faz a marcação das linhas na esquerda

            for(let j=0;j<8;j++){

                linhaPrint+="[" + tabuleiro[i][j] + "] "; // coloca as peças

            }

            console.log(linhaPrint);

        }

      }

}

export default Tabuleiro;

