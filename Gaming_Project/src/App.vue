<template>
  <!-- Exemple dans Home2.vue -->

    <!-- najmou naaytou hne wala fel home  -->
  <div id="app">
    <div class=" bg-gray-900 text-white container mx-auto">
    <div class="flex justify-between border-b border-gray-500 pb-3">
      <Navbar />
    <Searchbar />
    </div>
    
    <!--wala najmou naamlou haka -->
    <router-view/>
   
  </div>
    
  </div>
</template>

<script>
import Navbar from './components/header/navbar.vue';
import Searchbar from './components/header/searchbar.vue';
export default {
  name: 'App',
  components:{
    Navbar,
    Searchbar,
  }
}
</script>

<style>
/* Your styles go here */
</style>

