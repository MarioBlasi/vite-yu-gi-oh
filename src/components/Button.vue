<script>
export default {
  name: "Button",
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container-Btn">
    <div class="row-Btn">
      <div class="col-Btn">
        <div class="btn-group">
          <!-- <button @click="store.increment()">Card {{ store.count }}</button> -->
          <ul class="dropdown-menu">
            ...
          </ul>
        </div>
        <!-- dropdown -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.col-Btn {
  display: flex;
  justify-content: start;
  margin-top: 2rem;
  margin-left: 10rem;
}
.btn {
  background-color: white;
  width: 8rem;
  border-radius: 5px;
  text-align: left;
}
</style>
