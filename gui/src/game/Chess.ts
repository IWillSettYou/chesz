import {Piece, type Position} from "./Piece"
export class Chess {
    player!: boolean;
    pieces!: Piece[];


    public  getPieceSteps(piece: Piece): Position[] {
        return []
    }
  
    public getPosStatus(position: Position): Piece[] {
        return this.pieces.filter((piece: Piece)=> {
            piece.CurrentPosition == position;
        })
    }
}
