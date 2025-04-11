import ChessPiece from './ChessPiece.js';

class Queen extends ChessPiece{
    constructor(position: string){
        super('queen', position);
    }

    validMove(newPosition:string):boolean{
        let currentColumn=this.position[0].toUpperCase();
        let currentRow=parseInt(this.position[1]);
        let newColumn=newPosition[0].toUpperCase();
        let newRow=parseInt(newPosition[1]);

        if (currentColumn === newColumn || currentRow === newRow) {
            return true;
        }
      
        if (Math.abs(newRow - currentRow) === Math.abs(newColumn.charCodeAt(0) - currentColumn.charCodeAt(0))) {
            return true;
        }
        return false;
    }
    
    move(newPosition:string):void{
        if(this.validMove(newPosition)){
            console.log(`\nMoving queen from ${this.position} to ${newPosition}`);
            this.position = newPosition;
        }else{
            console.log(`\nInvalid move - queen from ${this.position} to ${newPosition}`);
        }
    }
    
    getPiece():string{
        return "Q";
    }
}

export default Queen;

