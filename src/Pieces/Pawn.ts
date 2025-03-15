import ChessPiece from './ChessPiece.js';

class Pawn extends ChessPiece{  // herança

    constructor(position:string){
        super('peao', position);
    }

    validMove(newPosition:string): boolean{ 
        let currentColumn=this.position[0].toUpperCase(); // isso daqui faz com que ele pegue a posição 0 da string e coloque em cacha alta. Ex: a->A
        let currentRow=parseInt(this.position[1]); // pego a posição 1, que é o numero mas faz parte de uma string e retorno como inteiro
        let newColumn=newPosition[0].toUpperCase(); 
        let newRow=parseInt(newPosition[1]);
    
        if(currentColumn === newColumn && newRow === currentRow + 1) return true;
      
        return false;
    }
      
    move(newPosition:string):void{
        if(this.validMove(newPosition)){
            console.log(`\nMovendo peão de ${this.position} para ${newPosition}`);
            this.position=newPosition;
        } else{
            console.log(`\nMovimento inválido - peão de ${this.position} para ${newPosition}`);
        }
    }

    getPiece():string{
        return "P";
    }

}

export default Pawn;


