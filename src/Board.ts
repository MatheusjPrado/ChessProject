import ChessPiece from './Pieces/ChessPiece.js';

class Board{
    pieces:ChessPiece[];

    constructor(){
        this.pieces=[]; // array de peças
    }
    
    private validPosition(position: string):boolean{
        return /^[A-H][1-8]$/.test(position);
    }

    placePiece(piece:ChessPiece, position:string):void{
        if(!this.validPosition(position)){
            console.log('\nPosição inválida :p');
            return;
        }
        
        if(this.pieceAtPosition(position)){ 
            console.log(`\nJá existe uma peça na posição ${position}`);
            return;
        }
        
        piece.position=position;
        this.pieces.push(piece);  // isso add a peça no array de peças
        console.log(`\nA peça ${piece.type} foi colocada na posição ${position}`);
    }
    
    //essa funcao é usada pra ver se tem uma peça na posição informada
    pieceAtPosition(position: string):boolean{
        for(let i=0;i<this.pieces.length;i++){

            if(this.pieces[i].position===position){   // compara se alguma das peças no array estão nessa posicao x
                return true; // encontrou uma peça na posição
            }
        }
        return false; // nao encontrou
    }
    
    printBoard():void{
        let board:string[][]=[];
        
        //cria o tabuleiro vazio
        for(let i=0;i<8; i++){
            board[i]=[];
            for(let j=0;j<8;j++){
                board[i][j]=' ';
            }
        }
      
        /*preciso calcular indices do array, fazendo que cada letra do alfabeto tenha um respectivo numero que o represente.
        Aqui usei um calculo usando a tabela ascii que eu diminuo o valor da da letra da coluna por 'A' que é o primeiro elemento
        da coluna, fazendo com que caso a coluna seja A, fique A-A=0 e o peao esteja na primeira coluna, se A-B=1, na segunda...*/
        for(let k=0; k<this.pieces.length; k++){
            let position=this.pieces[k].position;  // this.peca[k] esta armazenado o array de peças, ele pega a peça e acha sua posição
            let column=position[0].toUpperCase();  // pega o primeiro caractere (letra) e transforma em maiusculo
            let row=parseInt(position[1]);         // pega o segundo caractere (numero)
            
            //calculo dos indices, através disso a peça pode ser alocada em algum x linha e y coluna
            let columnIndex=column.charCodeAt(0)-'A'.charCodeAt(0);
            let rowIndex=8-row; // linha 8 -> índice 0, linha 7 -> índice 1, e assim vai indo
            
            board[rowIndex][columnIndex]=this.pieces[k].getPiece();
        }
      
        console.log("\n   A   B   C   D   E   F   G   H");
      
        // os dois for concatenam o conteudo das linhas e o console.log no final imprime
        for(let i=0;i<8;i++){
            let rowPrint=(8-i) + " "; // faz a marcação das linhas na esquerda

            for(let j=0; j<8; j++){
                rowPrint += "[" + board[i][j] + "] ";// coloca as peças
            }

            console.log(rowPrint);
        }
    }

    getPiece(position: string){
        return this.pieces.find(p => p.position === position);
    }
}

export default Board;


