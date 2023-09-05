<template>
  <div id="app">
    <div class="footer">
      <router-link class="s" to="/"><span class="a" @click="add()">Learn</span></router-link>
      <router-link class="d" to="/"><span class="a" @click="add1()">Check</span></router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
// learn.onclick = () =>{
  // learn.style.opacity= '40%'
// }
// check.onclick = () =>{
  // check.style.opacity= '40%'
// }
  // let check = document.querySelector('.d')

export default{
  name: 'App',
   methods: {
add(){
let learn = document.querySelector('.s')
let check = document.querySelector('.d')
learn.style.opacity = '100%'
  check.style.opacity = '60%'
},
  
},
created(){
  alert('You have visited the site of Damirbek Xolnazarov. You can message your gratitude to @D_amir777')
}
} 
    // },
  //   add1(){
  //     check.style.opacity = '100%';
  //     learn.style.opacity = '60%'
  //   }
  //  }
    
</script>

<style>
@font-face {
  font-family: 'font1';
  src: url('./assets/font1.ttf');
}
@font-face {
  font-family: 'font2';
  src: url('./assets/font2.ttf');
}
@font-face {
  font-family: 'font3';
  src: url('./assets/font3.ttf');
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  margin: 0;
  text-align: center;
  color: #2c3e50;
}
.footer{
  width: 100%;
  height: 70px;
  background: white;
  z-index: 999 !important;
  position: fixed;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
.a{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
a{
  text-decoration: none;
  font-family: 'font2';
  font-weight: 700;
  color: #2c3e50;
}
.s{
  display: flex;
  flex-direction: row;
  font-size: 26px;
  align-items: center;
  justify-content: center;
  background: #ffbd03;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
}
.d{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #ffbd03;
  opacity: 60%;
  font-size: 26px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}
</style>
