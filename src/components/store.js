import { reactive } from "vue";

export const store = reactive({
  searchText: "",
  loading: "",
  API_URL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0",
  data: "",
  archetypes: [],
  selectedArchetype: null,
});
