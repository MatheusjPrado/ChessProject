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
const Bishop_js_1 = __importDefault(require("./Pieces/Bishop.js"));
const Queen_js_1 = __importDefault(require("./Pieces/Queen.js"));
const Knight_js_1 = __importDefault(require("./Pieces/Knight.js"));
const rl = readline_1.default.createInterface({
    input: process.stdin, output: process.stdout
});
var PieceType;
(function (PieceType) {
    PieceType["PAWN"] = "pawn";
    PieceType["ROOK"] = "rook";
    PieceType["KING"] = "king";
    PieceType["QUEEN"] = "queen";
    PieceType["KNIGHT"] = "knight";
    PieceType["BISHOP"] = "bishop";
})(PieceType || (PieceType = {}));
function showMenu() {
    console.log("\nChoose an option:");
    console.log("1 - Place piece");
    console.log("2 - Move piece");
    console.log("3 - Exit");
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
        option = await ask("\nOptions: ");
        switch (option) {
            case "1":
                let pieceTypeInput = await ask("\nWhich piece do you want to place? (pawn, rook, king, bishop, knight, queen): ");
                pieceTypeInput = pieceTypeInput.toLowerCase(); // faz com que a entrada fique em minusculo pra depois ser transf em maiusculo
                let position = await ask("Enter the position: ");
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
                    case PieceType.BISHOP:
                        piece = new Bishop_js_1.default(position);
                        break;
                    case PieceType.KNIGHT:
                        piece = new Knight_js_1.default(position);
                        break;
                    case PieceType.QUEEN:
                        piece = new Queen_js_1.default(position);
                        break;
                    default:
                        console.log("Invalid piece type");
                        continue;
                }
                board.placePiece(piece, position);
                break;
            case "2":
                let currentPosition = await ask("Enter the current position of the piece you want to move:  ");
                currentPosition = currentPosition.trim().toUpperCase();
                let newPosition = await ask("Enter the new position: ");
                newPosition = newPosition.trim().toUpperCase();
                const pieceFromBoard = board.getPiece(currentPosition);
                if (pieceFromBoard) {
                    pieceFromBoard.move(newPosition);
                }
                else {
                    console.log(`\nNo piece found at position ${currentPosition}`);
                }
                break;
            case "3":
                console.log("\nEND\n");
                rl.close(); // fecha a entrada de dados
                process.exit(0); // encerra o programa
                break;
            default:
                console.log("\nInvalid option, please try again");
        }
    }
}
main();
