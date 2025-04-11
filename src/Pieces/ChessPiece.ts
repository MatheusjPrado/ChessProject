abstract class ChessPiece{

    type:string;
    position:string;
  
    constructor(type:string, position:string){
        this.type= type; // rei, torre, peao...
        this.position=position;
    }
    
    abstract validMove(newPosition:string):boolean;
    abstract move(newPosition: string):void;
  
    getPiece():string{
        return 'x';
    }
  
}
  
export default ChessPiece;
  
  
  
  
  