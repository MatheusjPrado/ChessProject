"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PecaXadrez {
    constructor(tipo, posicao) {
        this.tipo = tipo; // rei, torre ou peao
        this.posicao = posicao;
    }
    getPeca() {
        return 'oiRodrigo';
    }
}
exports.default = PecaXadrez;
