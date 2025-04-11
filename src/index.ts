import readline from 'readline';
import Pawn from './Pieces/Pawn.js';
import Rook from './Pieces/Rook.js';
import King from './Pieces/King.js';
import Board from './Board.js';
import Bishop from './Pieces/Bishop.js';
import Queen from './Pieces/Queen.js';
import Knight from './Pieces/Knight.js';

const rl= readline.createInterface({
    input: process.stdin, output: process.stdout
});


enum PieceType{
    PAWN = 'pawn',
    ROOK ='rook',
    KING = 'king',
    QUEEN = 'queen',
    KNIGHT = 'knight',
    BISHOP= 'bishop'
}

function showMenu():void{
    console.log("\nChoose an option:");
    console.log("1 - Place piece");
    console.log("2 - Move piece");
    console.log("3 - Exit");
}

function ask(question:string):Promise<string>{
    return new Promise(resolve=>{rl.question(question, resolve)});
}

async function main():Promise<void>{
    let board=new Board();
    let option= "";

    while(true){

        board.printBoard();  // imprime o tabuleiro

        showMenu();
        option= await ask("\nOptions: ");

        switch(option){
            case "1":
                    let pieceTypeInput= await ask("\nWhich piece do you want to place? (pawn, rook, king, bishop, knight, queen): ");
                    pieceTypeInput=pieceTypeInput.toLowerCase(); // faz com que a entrada fique em minusculo pra depois ser transf em maiusculo

                    let position=await ask("Enter the position: ");
                    position= position.toUpperCase();

                    let piece; 

                    switch(pieceTypeInput){
                        case PieceType.PAWN:
                            piece= new Pawn(position);
                            break;
                        case PieceType.ROOK:
                            piece=new Rook(position);
                            break;
                        case PieceType.KING:
                            piece=new King(position);
                            break;
                        case PieceType.BISHOP:
                            piece=new Bishop(position);
                            break;
                        case PieceType.KNIGHT:
                            piece= new Knight(position);
                            break;
                        case PieceType.QUEEN:
                            piece=new Queen(position);
                            break;
                        default:
                            console.log("Invalid piece type");
                            continue;
                    }

                    board.placePiece(piece, position);
                break;

            case "2":
                    let currentPosition=await ask("Enter the current position of the piece you want to move:  ");
                    currentPosition= currentPosition.trim().toUpperCase();

                    let newPosition=await ask("Enter the new position: ");
                    newPosition=newPosition.trim().toUpperCase();

                    const pieceFromBoard= board.getPiece(currentPosition);

                    if(pieceFromBoard){
                        pieceFromBoard.move(newPosition);
                    }else{
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
}main();

