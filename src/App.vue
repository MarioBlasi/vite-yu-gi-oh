<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import Button from "./components/Button.vue";
// import MainContainer from "./MainContainer.vue";

export default {
  name: "Content",
  components: {
    Header,
    Card,
    Button,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <Header></Header>
  <!-- header -->

  <div class="main">
    <Button></Button>
    <!-- button -->
    <div class="container">
      <div class="row">
        <!-- row-cols-1 row-cols-md-3 row-cols-xl-5 -->
        <div class="col">
          <div>
            <h2><b>Found 39 cards</b></h2>
          </div>
          <Card></Card>
          <!-- CARD -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.row {
  border: 3rem solid white;
  margin-top: 5rem;
}

h2 {
  text-align: left;
  background-color: black;
  padding: 1.5rem;
  font-size: medium;
  color: white;
}
.col {
  padding: 0px;
}
</style>
