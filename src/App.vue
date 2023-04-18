<script>
import { store } from "./components/store";
import AppHeader from "./components/AppHeader.vue";
import CardList from "./components/CardList.vue";
import Button from "./components/Button.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "Appvue",
  components: {
    AppHeader,
    CardList,
    Button,
    AppFooter,
  },
  data() {
    return { store };
  },
  methods: {
    performSearch() {
      console.log("Search ");
      console.log(this.store.searchText);
    },
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <!-- header -->
  <!-- <div class="container">
    <select v-model="store.selectedArchetype">
      <option value="">Seleziona un archetipo</option>
      <option v-for="archetype in store.archetypes" :value="archetype">
        {{ archetype }}
      </option>
    </select>
    <CardList :cards="store.cards" />
  </div> -->
  <!-- Lista archetipi -->

  <div class="main">
    <Button></Button>
    <!-- button -->

    <div class="container">
      <div class="row">
        <div class="col">
          <div class="searchbox">
            <!-- dobbiamo avere accesso a data -->
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder=" search something"
                v-model="store.searchText"
              />
              <button
                class="btn btn-info"
                type="button"
                @click="performSearch()"
              >
                Search
              </button>
            </div>
            <!-- {{ store.searchText }} -->
          </div>
        </div>
      </div>
    </div>
    <!-- searchbox -->

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
              <!-- {{ store.Card.length }} -->
            </div>
          </div>
          <!--  Total Cards -->

          <CardList></CardList>
          <!-- CARD -->
        </div>
      </div>
    </div>
  </div>
  <!-- main -->

  <AppFooter></AppFooter>
  <!-- footer -->
</template>

<style lang="scss">
.row {
  margin-top: 3rem;
}

.alert {
  background-color: rgba(0, 0, 0, 0.473);
  color: white;
}
</style>
