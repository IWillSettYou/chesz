import { Piece, Position } from "./Piece";

class Move{
    Piece!: Piece
    From: Position
    To: Position

}

class Board{
    Pieces!: Piece[]
    Fallen!: Piece[]
    History!: Move[]
}