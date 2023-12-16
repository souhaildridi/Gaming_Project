<template>
  <div class="card" :class="flippedStyles" @click="selectCard">
    <div v-if="visible" class="card-face is-front">
      <img :src="`/images/${value}.png`" :alt="value">
      <img v-if="matched" src="/images/checkmark.svg" alt="Checkmark" class="icon-checkmark">
    </div>
    <div  class="card-face is-back"></div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: "CardGame",
  props: {
    matched: {
      default: false
    },
    position: {
      type: Number,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const flippedStyles = computed(() => {
      return props.visible ? 'is-flipped' : ''; // Provide an empty string as a default value
    });

    const selectCard = () => {
      context.emit('select-card', {
        position: props.position,
        faceValue: props.value
      });
    };

    return {
      flippedStyles,
      selectCard
    };
  }
};
</script>

<style>
.card {
  position: relative;
  transition:0.5s transform ease-in ;
  transform-style:preserve-3d;
}

.card-face.is-front {
  background-image: url('../../public/images/card-bg.png');
  color: white;
  transform: rotateY(180deg);

}

.card-face.is-back {
  background-image: url('../../public/images/card-bg-empty.png');
  background-repeat: repeat;
}

.card-face {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  backface-visibility:hidden;
}

.icon-checkmark {
  position: absolute;
  right: 5px;
  bottom: 5px;
}
.card.is-flipped{
  transform:rotateY(180deg);

}
</style>
