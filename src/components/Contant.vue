<script>
import Sidebar from "./Sidebar.vue";
import Content from "./Content.vue";

export default {
  name: "MainContainer",
  components: {
    Sidebar,
    Content,
  },
};
</script>

<template>
  <div class="main-container">
    <Sidebar />
    <div class="content-container">
      <Content />
    </div>
  </div>
</template>
