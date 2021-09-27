<template>
  <section id="hero">
    <!-- <div
            style="width: 450px; position: absolute; left: 120px; overflow: hidden;"
        >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="#abc4ff"
                    d="M67.2,-40.3C77.3,-21.2,69.1,6.9,54.8,29.3C40.5,51.6,20.3,68,-0.8,68.5C-21.8,68.9,-43.6,53.3,-56.4,31.9C-69.1,10.4,-72.8,-16.9,-61.9,-36.4C-51,-55.9,-25.5,-67.6,1.5,-68.5C28.5,-69.4,57,-59.4,67.2,-40.3Z"
                    transform="translate(100 100)"
                />
            </svg>
        </div>
        <div
            style="width: 450px; position: absolute; right: 120px; overflow: hidden;"
        >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="#ABC4FF"
                    d="M40.9,-47.2C54.7,-37.1,68.9,-25.9,71.2,-12.6C73.6,0.7,64,16.1,53.9,28.8C43.8,41.6,33.2,51.7,22.1,51.8C11.1,51.9,-0.4,42.2,-18.2,40C-36.1,37.9,-60.5,43.4,-69.8,36.1C-79.1,28.7,-73.4,8.4,-63.6,-5C-53.8,-18.4,-40.1,-24.9,-28.8,-35.5C-17.5,-46.1,-8.8,-60.8,2.4,-63.6C13.5,-66.4,27,-57.4,40.9,-47.2Z"
                    transform="translate(100 100)"
                />
            </svg>
        </div> -->
    <div class="container py-3 bg-pattern">
      <div class="row justify-content-center align-content-center" style="height: 820px;">
        <div class="col-lg-12 p-2 text-center">
          <div class="p-2 mb-5">
            <h3 v-scroll-reveal="{ delay: 250 }">Hi, Welcome!</h3>
            <h4 class="mt-4 mb-0" v-scroll-reveal="{ delay: 350 }">
              I'm
            </h4>
            <h1 class="text-custom mb-4" v-scroll-reveal="{ delay: 450 }">
              Muhammad Maulana
            </h1>
            <h3 v-scroll-reveal="{ delay: 550 }">Web Developer</h3>
          </div>

          <div class="mouse-container p-5 mt-5" v-scroll-reveal="{ delay: 650 }">
            <a href="#" v-scroll-to="'#about'">
              <div class="mouse">
                <span class="scroll-down"></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log("Hero Component mounted.");
  },
};
</script>

<style scoped></style>
