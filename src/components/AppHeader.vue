<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <div>
      <img src="../assets/img/09IKk6jB_400x400.png" alt="" />
      <span><strong>Yu-Gi-Oh Api</strong></span>
    </div>
  </header>
  <!-- header -->
</template>

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
img {
  max-width: 100%;
}
span {
  padding: 1rem;
  font-size: 28px;
}
</style>
