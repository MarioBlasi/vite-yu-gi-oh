<script>
// import axios from "axios";
// import { store } from ".store";
// import CardItem from "./components/CardItem.vue";
export default {
  name: "CardItem",
  props: ["card"],
  data() {
    return {};
  },
  // mounted() {
  //   this.state.fetchCards(this.state.API_URL);
  // },
};
</script>

<template>
  <div class="content">
    <div class="card-container img-fluid" v-for="card in cards" :key="card.id">
      <!-- <div @click="store.increment()">{{ store.count }}</div> -->
      <img :src="card.card_images[0].image_url" alt="card-image" />
      <b
        ><p class="name">{{ card.name }}</p></b
      >
      <b
        ><p class="type">{{ card.type }}</p></b
      >
      <div class="ark">
        {{ card.archetype }}
      </div>
    </div>
  </div>
  <!-- CARD -->
</template>

<style lang="scss">
.content {
  background-color: brown;
}
</style>
