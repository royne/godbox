<template>
  <article class="home">
    <app-header></app-header>
    <div class="home__search">
      <input type="text" name="" value="" placeholder="Buscar">
    </div>
    <div class="home__content">
      <div class="home__content--box" v-for="speaker in spekears">
        <div class="bg_box"></div>
        <img :src="speaker.src" alt="">
        <p>{{ speaker.name }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data (){
    return{
      spekears: [
        { name: 'andres corson', src: require('./../assets/img/andres_corson.png') },
        { name: 'carlos olmos', src: require('./../assets/img/carlos_olmos.png') },
        { name: 'dante gebel', src: require('./../assets/img/dante_gebel.png') },
        { name: 'felipe echeverri', src: require('./../assets/img/felipe_echeverri.png') },
        { name: 'leonardo blanco', src: require('./../assets/img/leonardo_blanco.png')},
        { name: 'cash luna', src: require('./../assets/img/cash.png') },
      ]
    }
  }
}
</script>

<style lang="css">
</style>
