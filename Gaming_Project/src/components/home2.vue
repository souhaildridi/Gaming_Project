<!-- home2.vue -->
<template>
  <!--ces classes sont from library tailwindcss -->
 <!-- Exemple dans Home2.vue -->
 <img src="../assets/images/b1.jpg" alt="" class="w-400 h-auto mr-0 ml-0 pr-0 pl-0">

<div class="container mx-auto">
    <PopularGames/>
    <upComing/>
  </div>
</template>


<script>

import PopularGames from './header/popularGames.vue';
import upComing from './upComing.vue';

export default {
  name: 'HomeTwo', // Change component name to multi-word
  components: {

    PopularGames,
    upComing,
},
};
</script>

<style>
/* You can add styles here if needed */
</style>

