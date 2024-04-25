
<template>

<tabla class="board">

<sor v-for="y in 8" :key="y" v-model="board" >

    <generator v-if="y % 2 != 0">
      <kocka v-for="i in 8" :key="i">
        <div v-if="i % 2 != 0">
            <white>
                <center>
                    {{ board.getPiece( {x:i, y:y }) }}
                </center>
            </white>
        </div>
        <div v-else>
            <black>
                    {{ board.getPiece( {x:i, y:y }) }}

            </black>
        </div>
      </kocka>


    </generator>

    <generator v-else>
    <kocka v-for="i in 8" :key="i">
        <div v-if="i % 2 != 0">
            <black >
                <center>
                    {{ board.getPiece( {x:i, y:y }) }}

                </center>
            </black>
        </div>
        <div v-else>
            <white>
                
                <center>
                    {{ board.getPiece( {x:i, y:y }) }}

                </center>
            </white>
            
        </div>
      </kocka>
    </generator>


  </sor>

</tabla>


</template>

<script lang="ts">

import { Board } from "../game/Board";

export default {
    data(){
        return{
        board: new Board()
        }
    },

  
    async created(){

        this.board.initPieces();

        console.log(this.board.getPiece({x:0,y:1}));
    }
}
</script>

<style scoped>



tabla {
    height: 50%;
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    border: 35px solid GRAY;
    margin: auto;
    }

black{
    background-color: black;
    height: 5em;
    width: 5em;
    
}
white{
    
height: 5em;
    width: 5em;
    
    background-color: white;

}
*{
    display: block;
}

</style>
