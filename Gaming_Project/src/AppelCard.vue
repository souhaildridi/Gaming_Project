
  <template>
    <div id="AppelCard">
      <h1 class="sr-only">Peek-a-Vue</h1>
      <img src="/images/peek-a-vue-title.png" alt="Peek-a-Vue" class="title" />
      <section class="description">
        <p>Welcom de peek-a-vue!</p>
        <p>Card matching game powered by Vue.js 3!</p>
      </section>
    
      <transition-group tag="section" class="game-board" name="shuffle-card">
        <CardGame
          v-for="card in cardList"
          :key="`${card.value}-${card.variant}`"
          :matched="card.matched"
          :position="card.position"
          :value="card.value"
          :visible="card.visible"
          @select-card="flipCard(card.position)"
        />
      </transition-group>
      <h2 class="status">{{ status }}</h2>
      <button v-if="newPlayer" @click="startGame" class="button">
        <img src="/images/play.svg" alt="Restart Icon" /> Start game
      </button>
      <button v-else @click="restartGame" class="button">
        <img src="/images/restart.svg" alt="Restart Icon" /> Restart game
      </button>
    </div>
  </template>
  <script>
  import CardGame from './components/Card.vue';
  import { ref, watch, computed } from 'vue';
  import _ from 'lodash';
  import { launchConfetti } from './utulities/confetti.js';
  
  export default {
    name: 'AppelCard',
    components: {
      CardGame
    },
    setup() {
      const cardList = ref([]);
      const userSelection = ref([]);
      const newPlayer=ref(true)
      const startGame=()=>{
        newPlayer.value=false
  
        restartGame()
      }
      const status = computed(() => {
        if (remainingPairs.value === 0) {
          return 'Player win!';
        } else {
          return `Remaining Pairs: ${remainingPairs.value}`;
        }
      });
  
      const remainingPairs = computed(() => {
        const remainingCards = cardList.value.filter((card) => !card.matched).length;
        return remainingCards / 2;
      });
  
      const restartGame = () => {
        cardList.value = _.shuffle(cardList.value);
  
        cardList.value = cardList.value.map((card, index) => ({
          ...card,
          matched: false,
          visible: false,
          position: index
        }));
      };
  
      const cardItems = ['bat', 'candy', 'cauldron', 'cupcake', 'ghost', 'moon', 'pumpkin', 'witch-hat'];
  
      cardItems.forEach((item) => {
        cardList.value.push({
          value: item,
          variant: 1,
          visible: false,
          position: null,
          matched: false
        });
        cardList.value.push({
          value: item,
          variant: 2,
          visible: true,
          position: null,
          matched: false
        });
      });
  
      cardList.value = cardList.value.map((card, index) => ({
        ...card,
        position: index
      }));
  
      const flipCard = (index) => {
        if (cardList.value[index] && cardList.value[index].visible !== undefined) {
          cardList.value[index].visible = true;
  
          if (userSelection.value[0]) {
            if (
              userSelection.value[0].position === index &&
              userSelection.value[0].value === cardList.value[index].value
            ) {
              return;
            } else {
              userSelection.value[1] = index;
            }
          } else {
            userSelection.value[0] = index;
          }
        }
      };
  
      watch(remainingPairs, (currentValue) => {
        if (currentValue === 0) {
          launchConfetti();
        }
      });
  
      watch(userSelection, (currentValue) => {
        if (currentValue.length === 2) {
          const cardOne = cardList.value[currentValue[0]];
          const cardTwo = cardList.value[currentValue[1]];
  
          if (cardOne.value === cardTwo.value) {
            cardOne.matched = true;
            cardTwo.matched = true;
          } else {
            setTimeout(() => {
              cardOne.visible = false;
              cardTwo.visible = false;
            }, 2000);
          }
  
          userSelection.value.length = 0;
        }
      }, { deep: true });
  
      const shuffleCards = () => {
        cardList.value = _.shuffle(cardList.value);
      };
  
      return {
        cardList,
        flipCard,
        userSelection,
        status,
        restartGame,
        shuffleCards,
        startGame,
        newPlayer
      };
    }
  };
  </script>
  
  <style>
  html, body {
    margin: 0;
    padding: 0;
  }
  
  #AppelCard{
    background-image: url('../public/images/page-bg.png');
    font-family: Avenir, Helvetica, Arial, Helvetica, Arial, Helvetica, sans-serif;
    margin-top: 60px;
    background-repeat: repeat;
    height: 100vh;
    color: #fff;
    padding-top: 60px;
  }
  
  .game-board {
    display: grid;
    grid-template-columns: repeat(4, 120px);
    grid-template-rows: repeat(4, 120px);
    grid-column-gap: 30px;
    grid-row-gap: 80px;
    justify-content: center;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  
  .title  {
   text-align: center;
  }
  
  .button {
    background-color: orange;
    color: white;
    padding: 0.75rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-weight: bold;
    font-family: 'Titillium Web', sans-serif;
  margin-top:15px;
  font-weight:bold;
  font-size:1.1rem;
  border: 0;
  border-radius: 10px;
  }
  .title  {
    display: flex;
    justify-content: center;
    padding-left: 570px;
    margin-bottom: 40px;
  }
  
  .button img {
    padding-right: 5px;
  }
  
  .shuffle-card-move {
    transition: transform 0.8s ease-in;
  }
  .description{
    text-align: center;
    font-family: 'Titillium Web', sans-serif;
  }
  .description p{
    margin:0;
    font-size:1.2rem;
  }
  .description p:last-child{
    margin-bottom:30px ;
   
  }
  .status{
    font-family: 'Titillium Web', sans-serif;
    text-align: center;
    margin-top:10px;
  }
  </style>