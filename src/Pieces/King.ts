import ChessPiece from './ChessPiece.js';

class King extends ChessPiece{  // herança

    constructor(position:string){
        super('rei', position);
    }

    validMove(newPosition:string):boolean{
        let currentColumn=this.position[0].toUpperCase(); // isso pega a posição 0 da string e coloca em caixa alta. Ex: a -> A
        let currentRow=parseInt(this.position[1]); // pega a posição 1, que é o número, e converte para inteiro
        let newColumn=newPosition[0].toUpperCase();
        let newRow=parseInt(newPosition[1]);
        
        //charCodeAt eu consigo transformar um char num numero na tabela ascii, assim descobrindo a distancia entre as colunas A e B
        if (Math.abs(newRow - currentRow) <= 1 && Math.abs(newColumn.charCodeAt(0) - currentColumn.charCodeAt(0))<=1)
            return true;
      
        return false;
    }
    
    move(newPosition: string):void{
        if (this.validMove(newPosition)){
            console.log(`\nMovendo rei de ${this.position} para ${newPosition}`);
            this.position=newPosition;
        } else{
            console.log(`\nMovimento inválido - rei de ${this.position} para ${newPosition}`);
        }
    }
    
    getPiece():string{
        return "R";
    }
}

export default King;


