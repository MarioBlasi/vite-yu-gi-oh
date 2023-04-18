<script>
// import { state } from "../src/components/state.js";
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import Button from "./components/Button.vue";
import Footer from "./components/Footer.vue";
import CardItem from "./components/CardItem.vue";

export default {
  name: "Appvue",
  components: {
    Header,
    Card,
    Button,
    Footer,
    CardItem,
  },
  data() {
    return {
      // state,
    };
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
          <div class="total-cards">
            <div class="alert alert-dismissible fade show" role="alert">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
              <strong>Total Cards:</strong>
              <!-- {{ state.Card.length }} -->
            </div>
          </div>
          <!--  Total Cards -->

          <Card></Card>
          <!-- CARD -->
        </div>
      </div>
    </div>
  </div>
  <!-- main -->

  <Footer></Footer>
  <!-- footer -->
</template>

<style lang="scss">
.row {
  margin-top: 3rem;
}
.col {
}
.alert {
  background-color: rgba(0, 0, 0, 0.473);
  color: white;
}
</style>
