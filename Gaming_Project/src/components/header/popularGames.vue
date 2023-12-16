<template>
  <div class="mx-5">
    <h2 class="uppercase mt-6 text-orange-500 text-2xl font-bold mb-3">Popular Games</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <gameItem v-for="(game1, index) in games1" :key="index" :game="game1" />
    </div>
    <br><br>
    <h2 class="uppercase mt-6 text-orange-500 text-2xl font-bold mb-3">Trending Now</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <gameItem v-for="(game, index) in games" :key="index" :game="game" />
    </div>
  </div>
</template>

<!-- ... (le reste de votre composant Vue) -->


<script>
import gameItem from "../items/gameItem";

export default {
  components: {
    gameItem,
  },
  data() {
    return {
      games1: [
        {
          id: 1,
          title: "Black Window",
          image: require("@/assets/images/i6.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },
        {
          id: 2,
          title: "Fantastic",
          image: require("@/assets/images/i5.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },
        {
          id: 2,
          title: "XDefiant",
          image: require("@/assets/images/i3.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },
        
        {
          id: 2,
          title: "Captain America",
          image: require("@/assets/images/i4.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },
        {
          id: 2,
          title: "Lucifer",
          image: require("@/assets/images/i7.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },
        {
          id: 2,
          title: "Moon Knight",
          image: require("@/assets/images/i8.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },
        {
          id: 2,
          title: "Hulk",
          image: require("@/assets/images/i9.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },
        {
          id: 2,
          title: "Avengers (Marvel's The Avengers)",
          image: require("@/assets/images/i10.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },


        // Add more game objects as needed
      ],
      games: [
        {
          id: 1,
          title: "Black Window",
          image: require("@/assets/images/i11.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },
        {
          id: 2,
          title: "Fantastic",
          image: require("@/assets/images/i5.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },
        {
          id: 2,
          title: "XDefiant",
          image: require("@/assets/images/i3.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },
        
        {
          id: 2,
          title: "Captain America",
          image: require("@/assets/images/i4.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },
        {
          id: 2,
          title: "Lucifer",
          image: require("@/assets/images/i7.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },
        {
          id: 2,
          title: "Moon Knight",
          image: require("@/assets/images/i8.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },
        {
          id: 2,
          title: "Hulk",
          image: require("@/assets/images/i9.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },
        {
          id: 2,
          title: "Avengers (Marvel's The Avengers)",
          image: require("@/assets/images/i10.jpg"),
          description: "Free to Play Arena Shooter",
          publisher: "Ubisoft (EU / UK)",
        },


        // Add more game objects as needed
      ],
    };
  },
};
</script>

<style>

/* Ajoutez vos styles ici si nécessaire */
</style>


