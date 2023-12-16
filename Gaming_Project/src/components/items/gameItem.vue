<template>
    <div class="game-item">
      <router-link :to="`/AppelCard`" class="game-link">
        <img :src="game.image" alt="" class="game-image">
      </router-link>
      <h3>{{ game.title }}</h3>
      <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="yellow">
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
        </svg>
        <span class="ml-2">{{ game.description }} | <br></span>
      </div>
      <span class="text-sm text-gray-500">{{ game.publisher }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      game: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Style the link container */
  .game-link {
    display: block;
    overflow: hidden;
    height: 200px; /* Adjust the height as needed */
    position: relative;
  }
  
  /* Style the image within the link */
  .game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
}

/* Add a dark overlay on hover and apply a custom animation */
.game-link:hover .game-image {
  opacity: 0.8;
  animation: fadeInUp 0.3s ease-in-out;
}
  
  /* Additional styles for the rest of your component if needed */
  </style>
  
  