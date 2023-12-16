<!-- navbar.vue -->
<template >
    <ul class="flex mt-7">
      <div class="fas fa-gamepad manette-icon fa-lg text-muted mt-1" id="logo"> Game Spot</div>
      <li><router-link to="/SignUp" class="ml-5">Login</router-link></li>
      <li><router-link to="/" class="ml-5">Games</router-link></li>
      <li><router-link to="/AppelCard" class="ml-5">Gamers</router-link></li>
      <li><router-link to="/" class="ml-5">Profile</router-link></li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'NavbarComponent', // Change component name to multi-word
  };
  </script>
  
  <style>
  /* You can add styles here if needed */
  </style>
  