import { Color, Pattern, Piece, type Position, Type } from "./Piece";

export class Move{
    Piece!: Piece
    From!: Position
    To!: Position

}

export class Board{
    Pieces!: Piece[]
    Fallen!: Piece[]
    History!: Move[]
    constructor(){
        this.Pieces = []
        this.Fallen = []
        this.History = []
    }
    public initPieces(){ //this generates pices, no further questions are advised
        let pawnWhite = new Piece({
            color: Color.White,
            steps: [Pattern.Pawn],
            type: Type.Pawn,
            startPosition: {x: 0, y: 1}
        })
            this.Pieces.push(pawnWhite)


    }
   
    public getPiece(position: Position): Piece | undefined {
        return this.Pieces.find((piece) => {
            
            if (piece.CurrentPosition ==  position) return true
            return false
        })
    }
}
