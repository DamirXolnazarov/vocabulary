<template>
<div class="day">
     <router-link to="/"><div class="close" ><span>&times;</span></div></router-link>
<div class="title">Day {{this.property.day}}</div>
<div class="words">
    <router-link to="/word">
<div class="word" @click="wor(word)" v-for="word of this.property.words" :key='word.id'>
    <span>{{word.word}}</span> <span>Meanings:{{word.definition.length}} </span>
</div>
</router-link>
</div>
</div>
</template>

<script>
export default{
name: 'DayView',
data() {
    return {
        property: JSON.parse(window.localStorage.dey),
    };
},
methods:{
   wor(sss){
    for(let i of this.property.words){
        if(sss.word == i.word){
            window.localStorage.word = JSON.stringify(i)
        }
    }
   }
}
}
</script>

<style scoped>
  .title{
    padding: 10px 0px;
    font-size: 36px;
  }
.day{
    width: 100%;
    padding-bottom: 100px;
    background: rgb(255, 255, 255);
}
.close{
    position: absolute;
    font-size: 40px;
    top: 10px;
    left: 20px;
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