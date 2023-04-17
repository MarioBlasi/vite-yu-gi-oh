<script>
import axios from "axios";

export default {
  name: "Content",
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
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <header>
    <div>
      <img src="./assets/img/09IKk6jB_400x400.png" alt="" />
      <span><strong>Yu-Gi-Oh Api</strong></span>
    </div>
  </header>
  <!--  -->
  <div class="main">
    <div class="btn-group">
      <button
        class="btn btn-light btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Alien
      </button>
      <ul class="dropdown-menu">
        ...
      </ul>
    </div>
    <!-- dropdown -->
    <div class="container">
      <div class="row">
        <div class="col">
          <div>
            <h2><b>Found 39 cards</b></h2>
          </div>
          <div class="content">
            <div
              class="card-container img-fluid"
              v-for="card in cards"
              :key="card.id"
            >
              <img :src="card.card_images[0].image_url" alt="card-image" />
              <b
                ><p class="name">{{ card.name }}</p></b
              >
              <b
                ><p class="type">{{ card.type }}</p></b
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
// row-cols-1 row-cols-md-3 row-cols-xl-5

<style lang="scss">
header {
  height: 4rem;
  padding: 0.5rem;
  background-color: rgb(255, 255, 255);
  color: black;
  align-items: center;
  img {
    width: 3rem;
  }
}
span {
  padding: 1rem;
  font-size: 28px;
}
.row {
  border: 3rem solid white;
  margin-top: 5rem;
}
.container {
  position: relative;
}
.btn {
  position: absolute;
  left: 18rem;
  top: 3rem;
  background-color: white;
  width: 8rem;
  border-radius: 5px;
  text-align: left;
}
img {
  max-width: 100%;
}
h2 {
  text-align: left;
  background-color: black;
  padding: 2rem;
  font-size: medium;
  color: white;
}
.col {
  padding: 0px;
}
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
  }
  .type {
    text-align: center;
    color: black;
  }
}
</style>
