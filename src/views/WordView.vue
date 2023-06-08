<template>
  <div class="word">
    <router-link to="/day"><div class="close" ><span>&times;</span></div></router-link>
     <h1>{{word.word}}</h1>
     <div class="definition" v-for="item of word.definition" :key="item.id">
     <span><span>Definition: </span> {{item}}</span>
     </div>
     <span class="ex">Examples:</span>
      <ul v-for="or of word.examples" :key="or.id">
        <li>{{or}}</li>
      </ul>
     </div>
</template>

<script>
export default {
  name: 'WordView',
  methods:{
  },
  data() {
    return {
        word: JSON.parse(window.localStorage.word),
    };
},
}
</script>

<style scoped>
  .word{
    width: 100%;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    height: 100vh;
    background: white;
    padding: 50px 10px;
  }
  h1{
    padding: 0px 0px 10px 0px;
  }
  .close{
    position: absolute;
    font-size: 40px;
    top: 10px;
    left: 20px;
  }
  .definition span span{
    font-weight: 700;
  }
  .ex{
    font-size: 20px;
    font-weight: 700;
    margin: 15px 0px;
  }
  .definition{
    margin: 10px 0px;
  }
  ul{
    list-style-type: lower-roman;
    margin-top: 15px;
  }
  ul li{
    list-style-type: disc;
  }
</style>