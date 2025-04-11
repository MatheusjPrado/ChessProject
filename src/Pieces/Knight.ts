import ChessPiece from './ChessPiece.js';

class Knight extends ChessPiece{

    constructor(position:string){
        super('knight', position);
    }

    validMove(newPosition:string):boolean{
        let currentColumn= this.position[0].toUpperCase();
        let currentRow=parseInt(this.position[1]);
        let newColumn= newPosition[0].toUpperCase();
        let newRow =parseInt(newPosition[1]);

        let rowDiff= Math.abs(newRow - currentRow);
        let colDiff= Math.abs(newColumn.charCodeAt(0) - currentColumn.charCodeAt(0));

        if((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)){
            return true;
        }
        return false;
    }
    
    move(newPosition:string):void{
        if (this.validMove(newPosition)){
            console.log(`\nMoving knight from ${this.position} to ${newPosition}`);
            this.position = newPosition;
        }else{
            console.log(`\nInvalid move - knight from ${this.position} to ${newPosition}`);
        }
    }
    
    getPiece():string{
        return "k";
    }
}

export default Knight;

