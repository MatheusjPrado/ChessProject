import readline from 'readline'; 
import Peao from './classes/Peao.js';
import Torre from './classes/Torre.js';
import Rei from './classes/Rei.js';
import Tabuleiro from './classes/Tabuleiro.js';

const rl=readline.createInterface({

    input:process.stdin,output:process.stdout

});


function Menu():void{

    console.log("\nEscolha uma opcao:");
    console.log("1 - Colocar peca");
    console.log("2 - Mover peca");
    console.log("3 - Sair");

}


function perguntar(coisa:string):Promise<string>{

    return new Promise(resolve=>{rl.question(coisa,resolve)});

}


async function main():Promise<void>{ //isso é mt estranho pqp

    let tabuleiro=new Tabuleiro();
    let opcao="";

    while(true){

        tabuleiro.imprimirTabuleiro();  // imprime o tabuleiro

        Menu();
        opcao=await perguntar("\nOpção: ");

        if(opcao==="1"){

            let tipo=await perguntar("\nQual peça deseja colocar? (peao, torre, rei): ");
            tipo=tipo.toLowerCase(); // faz com que a entrada fique em minusculo pra depois ser transf em maiusculo

            let posicao=await perguntar("Informe a posição (ex: A2): ");
            posicao=posicao.toUpperCase();

            let peca;

            if(tipo==="peao"){

                peca=new Peao(posicao);

            }else if(tipo==="torre"){

                peca=new Torre(posicao);

            }else if(tipo==="rei"){

                peca=new Rei(posicao);

            }else{

                console.log("Tipo de peça inválida");
                continue;

            }

            tabuleiro.colocarPeca(peca,posicao);

        }else if(opcao==="2"){

            // Agora, além da nova posição, precisamos saber de qual peça mover
            let posicaoAtual=await perguntar("Informe a posição atual da peça que deseja mover: ");
            posicaoAtual=posicaoAtual.trim().toUpperCase();

            let novaPosicao=await perguntar("Informe a nova posição: ");
            novaPosicao=novaPosicao.trim().toUpperCase();
            tabuleiro.moverPeca(posicaoAtual,novaPosicao);

        }else if(opcao==="3"){

            console.log("\nfim do programa :)\n");
            rl.close(); // fecha a entrada de dados
            process.exit(0); // encerra o programa

        }else{

            console.log("\nOpção inválida, tente novamente");

        }
    }
}
main();
