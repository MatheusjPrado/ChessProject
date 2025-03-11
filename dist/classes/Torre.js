"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PecaXadrez_js_1 = require("./PecaXadrez.js");
class Torre extends PecaXadrez_js_1.default {
    constructor(posicao) {
        super('torre', posicao);
    }
    movimentoValido(novaPosicao) {
        let colunaAtual = this.posicao[0].toUpperCase();
        let linhaAtual = parseInt(this.posicao[1]);
        let novaColuna = novaPosicao[0].toUpperCase();
        let novaLinha = parseInt(novaPosicao[1]);
        if (colunaAtual === novaColuna || linhaAtual === novaLinha)
            return true;
        return false;
    }
    getPeca() {
        return 'T';
    }
}
exports.default = Torre;
