<script>
export default {
  name: "TotalCards",
  data() {
    return {};
  },
};
</script>

<template>
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
</template>

<style lang="scss">
footer {
  color: blue;
  text-align: center;
}
</style>
