import { Pattern, Piece, Position } from "./Piece";
import { Chess } from "./Chess";

export function generateSteps(pattern: Pattern, piecePos: Position): Position[] {



    return []
}
/*
function X(piecepos: Position){
    let list: Position[] = [];

    for (let x = 0; x < 8; x++) {

        if(getPosStatus({x: x, y:x }).length == 0){
            list.push({x: x ,y:x})
        }
    }

    for (let x = -8; x < 0; x++) {
            list.push({x: x ,y:x})
    }

    for (let x = -8; x < 0; x++) {
            list.push({x: x ,y:x})
    }



}*/


export function movePieceToPosition(moveToPosition: Position, currentPiece: Piece){
   // skip this
   currentPiece.setPosition(moveToPosition) 

}