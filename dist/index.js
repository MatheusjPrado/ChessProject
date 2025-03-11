"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline"); // o outro import nao estava sendo compilado em ts
const Peao_js_1 = require("./classes/Peao.js");
const Torre_js_1 = require("./classes/Torre.js");
const Rei_js_1 = require("./classes/Rei.js");
const Tabuleiro_js_1 = require("./classes/Tabuleiro.js");
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});
function Menu() {
    console.log("\nEscolha uma opcao:");
    console.log("1 - Colocar peca");
    console.log("2 - Mover peca");
    console.log("3 - Sair");
}
function perguntar(coisa) {
    return new Promise(resolve => { rl.question(coisa, resolve); });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let tabuleiro = new Tabuleiro_js_1.default();
        let opcao = "";
        while (true) {
            tabuleiro.imprimirTabuleiro(); // imprime o tabuleiro
            Menu();
            opcao = yield perguntar("\nOpção: ");
            if (opcao === "1") {
                let tipo = yield perguntar("\nQual peça deseja colocar? (peao, torre, rei): ");
                tipo = tipo.toLowerCase(); // faz com que a entrada fique em minusculo pra depois ser transf em maiusculo
                let posicao = yield perguntar("Informe a posição (ex: A2): ");
                posicao = posicao.toUpperCase();
                let peca;
                if (tipo === "peao") {
                    peca = new Peao_js_1.default(posicao);
                }
                else if (tipo === "torre") {
                    peca = new Torre_js_1.default(posicao);
                }
                else if (tipo === "rei") {
                    peca = new Rei_js_1.default(posicao);
                }
                else {
                    console.log("Tipo de peça inválida");
                    continue;
                }
                tabuleiro.colocarPeca(peca, posicao);
            }
            else if (opcao === "2") {
                // Agora, além da nova posição, precisamos saber de qual peça mover
                let posicaoAtual = yield perguntar("Informe a posição atual da peça que deseja mover: ");
                posicaoAtual = posicaoAtual.trim().toUpperCase();
                let novaPosicao = yield perguntar("Informe a nova posição: ");
                novaPosicao = novaPosicao.trim().toUpperCase();
                tabuleiro.moverPeca(posicaoAtual, novaPosicao);
            }
            else if (opcao === "3") {
                console.log("\nfim do programa :)\n");
                rl.close(); // fecha a entrada de dados
                process.exit(0); // encerra o programa
            }
            else {
                console.log("\nOpção inválida, tente novamente");
            }
        }
    });
}
main();
