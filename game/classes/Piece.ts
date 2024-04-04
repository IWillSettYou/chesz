
enum Colour {
    White,
    Black
}

enum Irany {
    Diagonal,
    Vertical,
    Horizontal
}

interface Step {
    direction: Irany    
    amount: number
}

export interface Position {
    x: number,
    y: number

}

export class Piece {
    Name!: string;
    Colour!: Colour;
    Steps!: Position[];
    OnField!: boolean;
    Position!: Position; 
    constructor(name, colour, steps){
        this.Name = name
        this.Colour = colour
        this.Steps = steps

    }



    generateSteps(step: Step){
        if (step.direction == Irany.Diagonal){            
            if (step.amount < 0 ){
                for (let x = -1; x > step.amount; x--) {
                    for (let y = -1; y > step.amount; y--) {
                        this.Steps.push({x, y})
                    }
                }
            }
            else{
                for (let x = 1; x < step.amount; x++) {
                    for (let y = 1; y < step.amount; y++) {
                        this.Steps.push({x, y})
                    }
                }
            }
        }
        if(step.direction == Irany.Horizontal){
            if(step.amount < 0){
                for (let x = -1; x > step.amount; x--) {
                    this.Steps.push({x, y:0})
                }
            }
        }

        else{
            
            for (let x = 1; x < step.amount; x++) {
                this.Steps.push({x, y:0})
            }
        }
        if(step.direction == Irany.Vertical){
            if(step.amount < 0){
                for (let y = -1; y > step.amount; y--) {
                    this.Steps.push({x:0, y})
            }
        }
            else{
                for (let y = 1; y < step.amount; y++) {
                    this.Steps.push({x:0, y})
                }
            }
        }   
    }
}
