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
        for (let x = 1; x <= 8; x++) {
            let pawn =new Piece({
                color: Color.White,
                steps:  [Pattern.Pawn],
                type: Type.Pawn,
                startPosition: {x: x, y: 2}
            });
            this.Pieces.push(pawn)
            let pawn2 =new Piece({
                color: Color.Black,
                steps:  [Pattern.Pawn],
                type: Type.Pawn,
                startPosition: {x: x, y: 7}
            });
            this.Pieces.push(pawn2);
        }
        
        const rookList = [1, 8]
        rookList.forEach(element => {
            let rook = new Piece({
                color: Color.White,
                steps: [Pattern.Plus],
                type: Type.Rook,
                startPosition:{x: element, y: 1}
            });
            this.Pieces.push(rook)
           let rook2 = new Piece({
                color: Color.Black,
                steps: [Pattern.Plus],
                type: Type.Rook,
                startPosition:{x: element, y: 8}
           });
            this.Pieces.push(rook2)
        });

        const knightList = [2, 7]
        knightList.forEach(element => {
            let knight = new Piece({
                color: Color.White,
                steps: [Pattern.L],
                type: Type.Knight,
                startPosition:{x: element, y: 1}
            });
            this.Pieces.push(knight)
               let knight2 = new Piece({
                color: Color.Black,
                steps: [Pattern.L],
                type: Type.Knight,
                startPosition:{x: element, y: 8}
            });
            this.Pieces.push(knight2)
        });

        const bishopList = [3, 6]
        bishopList.forEach(element => {
            let bihop = new Piece({
                color: Color.White,
                steps: [Pattern.X],
                type: Type.Bishop,
                startPosition:{x: element, y: 1}
            });
            this.Pieces.push(bihop)
            let bihop2 = new Piece({
                color: Color.Black,
                steps: [Pattern.X],
                type: Type.Bishop,
                startPosition:{x: element, y: 8}
            });
            this.Pieces.push(bihop2)
        });

         let queen = new Piece({
                color: Color.White,
                steps: [Pattern.X, Pattern.Plus],
                type: Type.Queen,
                startPosition:{x: 5, y: 1}
            });
            this.Pieces.push(queen)
            let queen2 = new Piece({
                color: Color.Black,
                steps: [Pattern.X, Pattern.Plus],
                type: Type.Queen,
                startPosition:{x: 5, y: 8}
            });
            this.Pieces.push(queen2)

        let king = new Piece({
                color: Color.White,
                steps: [Pattern.Square],
                type: Type.King,
                startPosition:{x: 4, y: 1}
            });
            this.Pieces.push(king)
             let king2 = new Piece({
                color: Color.Black,
                steps: [Pattern.Square],
                type: Type.King,
                startPosition:{x: 4, y: 8}
            });
            this.Pieces.push(king2)
        
        

    }
   
    public getPiece(position: Position): Piece | undefined {
           return  this.Pieces.find((piece)=>
                piece.CurrentPosition.x == position.x &&
                piece.CurrentPosition.y == position.y 
            )
    }
    public movePiece(piece: Piece, pos : Position) {
        piece.CurrentPosition = pos
    }
}
