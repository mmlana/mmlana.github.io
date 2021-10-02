<template>
  <div class="bg-secondary shadow-lg text-center" style="border-radius: 55px 55px 0 0">
    <div class="container justify-content-around p-1">
      <span>
        2021
        <font-awesome-icon icon="fa-solid fa-copyright" size="xs" />
        Muhammad Maulana
      </span>
    </div>
    <transition name="fade">
      <div id="pagetop" class="position-fixed bottom-0" style="right: 15px; cursor: pointer" v-show="scY > 300" @click="toTop">
        <font-awesome-icon icon="fa-solid fa-rocket" class="vue-back-to-top btn-to-top" size="2x" transform="rotate-314" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    console.log("Footer Component mounted.");
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
#pagetop:hover {
  color: #ff878885;
}
</style>
