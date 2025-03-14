"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const Pawn_js_1 = __importDefault(require("./Pieces/Pawn.js"));
const Rook_js_1 = __importDefault(require("./Pieces/Rook.js"));
const King_js_1 = __importDefault(require("./Pieces/King.js"));
const Board_js_1 = __importDefault(require("./Board.js"));
const rl = readline_1.default.createInterface({
    input: process.stdin, output: process.stdout
});
var PieceType;
(function (PieceType) {
    PieceType["PAWN"] = "peao";
    PieceType["ROOK"] = "torre";
    PieceType["KING"] = "rei";
})(PieceType || (PieceType = {}));
function showMenu() {
    console.log("\nEscolha uma opcao:");
    console.log("1 - Colocar peca");
    console.log("2 - Mover peca");
    console.log("3 - Sair");
}
function ask(question) {
    return new Promise(resolve => { rl.question(question, resolve); });
}
async function main() {
    let board = new Board_js_1.default();
    let option = "";
    while (true) {
        board.printBoard(); // imprime o tabuleiro
        showMenu();
        option = await ask("\nOpção: ");
        switch (option) {
            case "1":
                let pieceTypeInput = await ask("\nQual peça deseja colocar? (peao, torre, rei): ");
                pieceTypeInput = pieceTypeInput.toLowerCase(); // faz com que a entrada fique em minusculo pra depois ser transf em maiusculo
                let position = await ask("Informe a posição (ex: A2): ");
                position = position.toUpperCase();
                let piece;
                switch (pieceTypeInput) {
                    case PieceType.PAWN:
                        piece = new Pawn_js_1.default(position);
                        break;
                    case PieceType.ROOK:
                        piece = new Rook_js_1.default(position);
                        break;
                    case PieceType.KING:
                        piece = new King_js_1.default(position);
                        break;
                    default:
                        console.log("Tipo de peça inválida");
                        continue;
                }
                board.placePiece(piece, position);
                break;
            case "2":
                let currentPosition = await ask("Informe a posição atual da peça que deseja mover: ");
                currentPosition = currentPosition.trim().toUpperCase();
                let newPosition = await ask("Informe a nova posição: ");
                newPosition = newPosition.trim().toUpperCase();
                const pieceFromBoard = board.getPiece(currentPosition);
                if (pieceFromBoard) {
                    pieceFromBoard.move(newPosition);
                }
                else {
                    console.log(`\nNenhuma peça encontrada na posição ${currentPosition}`);
                }
                break;
            case "3":
                console.log("\nFim do programa :)\n");
                rl.close(); // fecha a entrada de dados
                process.exit(0); // encerra o programa
                break;
            default:
                console.log("\nOpção inválida, tente novamente");
        }
    }
}
main();
