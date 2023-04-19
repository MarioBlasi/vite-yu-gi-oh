<script>
import { store } from "./components/store";
import AppHeader from "./components/AppHeader.vue";
import CardList from "./components/CardList.vue";
import TotalCards from "./components/TotalCards.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "Appvue",
  components: {
    AppHeader,
    CardList,
    TotalCards,
    AppFooter,
  },
  data() {
    return { store };
  },
  methods: {
    performSearch() {
      console.log("Search");
      console.log(this.store.searchText);
      //ajax
      const url = this.store.API_URL + `?name=${this.store.searchText}`;
      console.log(url);
      // this.store.fetch(url);
    },
  },
  // mounted:{
  //   setTimeout(()=>{
  //     store.fetchCardList(store.API_URL);

  //   },2000)
  // }
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
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="SearchBox">
            <!-- dobbiamo avere accesso a data -->
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder=" search something"
                v-model="store.searchText"
                @keyup="performSearch()"
              />
              <button
                class="btn btn-info"
                type="button"
                @click="performSearch()"
              >
                Search
              </button>
            </div>
            {{ store.searchText }}
          </div>
        </div>
      </div>
    </div>
    <!-- <SearchBox></SearchBox> -->
    <!-- searchBox -->

    <div class="container">
      <div class="row">
        <div class="col">
          <TotalCards></TotalCards>
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
