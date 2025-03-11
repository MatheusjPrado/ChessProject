"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PecaXadrez_js_1 = require("./PecaXadrez.js");
class Rei extends PecaXadrez_js_1.default {
    constructor(posicao) {
        super('rei', posicao);
    }
    movimentoValido(novaPosicao) {
        let colunaAtual = this.posicao[0].toUpperCase();
        let linhaAtual = parseInt(this.posicao[1]);
        let novaColuna = novaPosicao[0].toUpperCase();
        let novaLinha = parseInt(novaPosicao[1]);
        //charCodeAt eu consigo transformar um char num numero na tabela ascii, assim descobrindo a distancia entre as colunas A e B
        if (Math.abs(novaLinha - linhaAtual) <= 1 && Math.abs(novaColuna.charCodeAt(0) - colunaAtual.charCodeAt(0)) <= 1)
            return true;
        return false;
    }
    getPeca() {
        return "R";
    }
}
exports.default = Rei;
