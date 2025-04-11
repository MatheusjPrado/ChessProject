import ChessPiece from './ChessPiece.js';

class Rook extends ChessPiece{
    constructor(position: string){
        super('rook', position);
    }

    validMove(newPosition: string):boolean{
        const currentColumn=this.position[0].toUpperCase();
        const currentRow= parseInt(this.position[1]);
        const newColumn=newPosition[0].toUpperCase();
        const newRow= parseInt(newPosition[1]);

        return(currentColumn === newColumn || currentRow === newRow);
    }

    move(newPosition:string):void{
        if(this.validMove(newPosition)){
            console.log(`\nMovendo torre de ${this.position} para ${newPosition}`);
            this.position=newPosition;
        } else{
            console.log(`\nMovimento inválido - torre de ${this.position} para ${newPosition}`);
        }
    } 

    getPiece():string{
        return 'R';
    }

}

export default Rook;
