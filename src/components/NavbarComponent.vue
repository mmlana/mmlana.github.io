<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary shadow-lg" style="border-radius: 0 0 55px 55px">
      <div class="container justify-content-around">
        <a class="navbar-brand fs-4" href="/">Muhammad Maulana</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarNav">
          <slot name="list-menu"></slot>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Navbar Component mounted.");
  },
};
</script>

<style scoped></style>
