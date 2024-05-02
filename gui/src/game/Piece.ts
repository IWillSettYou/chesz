
export enum Color {
    White,
    Black
}

export interface Position {
    x: number,
    y: number
}

export enum Pattern {
    X,
    Plus,
    Square,
    L,
    Pawn,
}


export enum Type {
    King,
    Queen,
    Rook,
    Bishop,
    Knight,
    Pawn
}

interface PieceInput {
    color: Color,
    steps: Pattern[],
     type: Type,
     startPosition: Position
}
export class Piece {
    public type!: Type;
    Color!: Color;
    OnBoard!: boolean;

    StartPosition!: Position; 
    CurrentPosition: Position; 

    Steps: Pattern[];

    constructor(input: PieceInput){
        
        this.Color = input.color
        this.Steps = input.steps;
        this.type = input.type;
        this.OnBoard = true;
        this.StartPosition = input.startPosition;
        this.CurrentPosition = input.startPosition;

    }

    
    public getName(): String{
     return this.type.toString()
    }
    public getImagePath(): String {
        return this.type + this.Color.toString() + ".png"
    }
}
