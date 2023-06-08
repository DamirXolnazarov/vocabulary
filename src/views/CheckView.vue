<template>
  <div class="check">
      <div class="title">
        <h1>Ms.Gulnoza</h1>
      </div>
      <div class="words">
        <div class="word" v-for="word of this.words" :key='word.id'>
         <span class="name">{{word.word}}</span> <span class="word_count">Meanings: {{word.definition.length}}</span>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'CheckView',
  data() {
    return {
      words:[
        {
           word: 'ascension',
           definition: ['','',''],
        },
        {
           word: 'ascension',
           definition: ['','',''],
        },
        {
           word: 'ascension',
           definition: ['','',''],
        },
        {
           word: 'ascension',
           definition: ['','',''],
        },
        {
           word: 'ascension',
           definition: ['','',''],
        },
        {
           word: 'ascension',
           definition: ['','',''],
        },
        {
           word: 'ascension',
           definition: ['','',''],
        },
        {
           word: 'ascension',
           definition: ['','',''],
        },
        {
           word: 'ascension',
           definition: ['','',''],
        },

      ]
    };
  },
}
</script>

<style scoped>
  .check{
    width: 100%;
    height: 100vh;
    margin-bottom: 400px;
    background: white;
  }
  .title{
    padding: 10px 0px;
    border-bottom: 1px solid;
  }
  .word{
    height: 70px;
    padding: 0px 35px;
    display: flex;
    margin: 15px 0px;
    transition: .3s;
    flex-direction: row;
    border-radius: 35px;
    font-size: 20px;
    align-items: center;
    justify-content: space-between;    
    width: 100%;
    background: rgb(255, 255, 255);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    
  }
  .word:active{
    background: rgb(214, 214, 214);
   }

</style>