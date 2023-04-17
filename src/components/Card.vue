<script>
import axios from "axios";
export default {
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php", {
        params: {
          num: 15,
          offset: 0,
        },
      })
      .then((response) => {
        this.cards = response.data.data;
        // this.store = response.data.data;
        // this.store.info = response.data.info;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <div class="content">
    <div class="card-container img-fluid" v-for="card in cards" :key="card.id">
      <img :src="card.card_images[0].image_url" alt="card-image" />
      <b
        ><p class="name">{{ card.name }}</p></b
      >
      <b
        ><p class="type">{{ card.type }}</p></b
      >
    </div>
  </div>
  <!-- CARD -->
</template>

<style lang="scss">
.content {
  padding-top: 0rem;
  display: flex;
  flex-wrap: wrap;
}
.card-container {
  width: calc(100% / 5);
  align-items: center;
  border: 1rem solid white;

  .name {
    font-size: larger;
    text-align: center;
    color: white;
  }
  .type {
    text-align: center;
    color: black;
  }
}
</style>
