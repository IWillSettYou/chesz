
<template>

<tabla class="board">

<sor v-for="y in 8" :key="y" v-model="board" >

    <generator v-if="y % 2 != 0">
      <kocka v-for="i in 8" :key="i">
        <div v-if="i % 2 != 0">
            <white class="color">
                <center class="center">
                      <div v-if="board.getPiece({x:y, y:i}) && board.getPiece({x:y, y:i}).getImagePath()"
                      class="draggable"
                      draggable>
                    <img 
    
                    :src="board.getPiece({x:y, y:i}) && board.getPiece({x:y, y:i}).getImagePath() " 
                     
  
                    
                    :data-x="y" :data-y="i"

                    >
  </div>
  <div v-else class="draggable"
  
><img src="/public/empty1.png" class="trans"></div>
                </center>
            </white>
        </div>
        <div v-else>
            <black class="color">
            
            <center class="center">
                      <div v-if="board.getPiece({x:y, y:i}) && board.getPiece({x:y, y:i}).getImagePath()" class="draggable">
                    <img 
    
                    :src="board.getPiece({x:y, y:i}) && board.getPiece({x:y, y:i}).getImagePath() " 
                      
                    width="60"
                    height="60"
                    
                    :data-x="y" :data-y="i"

                    >
  </div>
  <div v-else class="draggable"
  
  width="60"
  height="60"><img src="/public/empty1.png" class="trans"></div>
                </center>
            </black>
        </div>
      </kocka>


    </generator>

    <generator v-else>
    <kocka v-for="i in 8" :key="i">
        <div v-if="i % 2 != 0">
            <black  class="color">
                <center class="center">
                   <div v-if="board.getPiece({x:y, y:i}) && board.getPiece({x:y, y:i}).getImagePath()" class="draggable">
                    <img 
                    
                    :src="board.getPiece({x:y, y:i}) && board.getPiece({x:y, y:i}).getImagePath() " 
                     
                    width="60"
                    height="60"
                    :data-x="y" :data-y="i"
                    >
                   </div>
                   <div v-else class="draggable"
  
  width="60"
  height="60"><img src="/public/empty1.png" class="trans"></div>
                </center>
            </black>
        </div>
        <div v-else >
            <white class="color">
<center class="center">
  <div v-if="board.getPiece({x:y, y:i}) && board.getPiece({x:y, y:i}).getImagePath()" class="draggable">
                    <img 
    
                    :src="board.getPiece({x:y, y:i}) && board.getPiece({x:y, y:i}).getImagePath() " 
                      
                    width="60"
                    height="60"
                    
                    :data-x="y" :data-y="i"
                    >
  </div>
  <div v-else class="draggable"
  
  width="60"
  height="60"
  > <img src="/public/empty1.png" class="trans">
  </div>
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
        board: new Board(),
        dragging: null,
        }
    },
    async created(){
        this.board.initPieces();
    },
    methods: 
    {
        asd(el){
            console.log("started draggin gdeey nuzts")
            console.log(el)
        },
        dragenterped(el){
            console.log("dragenterped")
            console.log(el.target.dataset.x)
        }

    }
}
document.addEventListener('DOMContentLoaded', (event) => {

            var dragSrcEl = null;
            
            function handleDragStart(e) {
              
           
              
              dragSrcEl = this;
              
              
              e.dataTransfer.effectAllowed = 'move';
              e.dataTransfer.setData('text/html', JSON.stringify({content: this.innerHTML}));
            }
          
            function handleDragOver(e) {
              if (e.preventDefault) {
                e.preventDefault();
              }
          
              e.dataTransfer.dropEffect = 'move';
              return false;
            }
          
            function handleDragEnter(e) {
              this.classList.add('over');
            }
          
            function handleDragLeave(e) {
              this.classList.remove('over');
            }
          
            function handleDrop(e) {
              if (e.stopPropagation) {
                e.stopPropagation(); // stops the browser from redirecting.
              }
              

              console.log(dragSrcEl)
              console.log(this)
              
               if (dragSrcEl != this) {
                //dragSrcEl.innerHTML = this.innerHTML;
                //this.innerHTML = e.dataTransfer.getData('text/html');
                let draggedData = JSON.parse(e.dataTransfer.getData('text/html'));
                
                let droppedData = {content: this.innerHTML};

                this.innerHTML = draggedData.content;

                dragSrcEl.innerHTML = droppedData.content;

              }
              
              return false;
            }
          
            function handleDragEnd(e) {
              
              
              items.forEach(function (item) {
                item.classList.remove('over');
              });
            }
            
            
            let items = document.querySelectorAll('.color .center .draggable');
    // kys barna
console.log(items)
            items.forEach(function(item) {
              item.addEventListener('dragstart', handleDragStart, false);
              item.addEventListener('dragenter', handleDragEnter, false);
              item.addEventListener('dragover', handleDragOver, false);
              item.addEventListener('dragleave', handleDragLeave, false);
              item.addEventListener('drop', handleDrop, false);
              item.addEventListener('dragend', handleDragEnd, false);
            });

          });
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
    background-color: gray;
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
.draggable{
  width: 100%;
  height: 100%;
  display: flex;
   align-items: center;
  justify-content: center;
  
}
.trans{
  opacity: 100%;

  height: 5em
}
[draggable]{ /*disable text selection*/
    user-select: none;
}

</style>
