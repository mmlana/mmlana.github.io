<template>
  <section class="mb-5" id="tools-skills">
    <div class="p-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 bg-pattern-wind">
            <div class="title" v-scroll-reveal="{ delay: 250 }">
              <h2 class="text-custom">
                Tools & Skills
              </h2>
            </div>
            <div class="row align-items-center">
              <div class="col-lg-3 col-md-3 col-sm-6 text-center p-2 my-2" v-for="(src, index) in tools" v-bind:key="src.id" v-scroll-reveal="{ delay: index * 200 + 50 }">
                <div class="card justify-content-center mx-auto shadow-custom border-glass" style="height: 110px; width: 110px;">
                  <a :href="src.link" target="_blank" class="img-tools" :title="src.title">
                    <img :src="src.src" :alt="src.title" class="rounded" width="100" height="100" style="object-fit: contain;" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tools: [
        {
          id: 1,
          title: "HTML5",
          src: require("@/assets/img/html5.png"),
          link: "#",
        },
        {
          id: 2,
          title: "CSS",
          src: require("@/assets/img/css.png"),
          link: "#",
        },
        {
          id: 3,
          title: "JavaScript",
          src: require("@/assets/img/js.png"),
          link: "https://www.javascript.com",
        },
        {
          id: 4,
          title: "Bootstrap",
          src: require("@/assets/img/bootstrap.png"),
          link: "https://getbootstrap.com",
        },
        {
          id: 5,
          title: "MySQL",
          src: require("@/assets/img/mysql.png"),
          link: "https://www.mysql.com",
        },
        {
          id: 6,
          title: "CodeIgniter",
          src: require("@/assets/img/ci.png"),
          link: "https://codeigniter.com",
        },
        {
          id: 7,
          title: "Laravel",
          src: require("@/assets/img/laravel.png"),
          link: "https://laravel.com",
        },
        {
          id: 8,
          title: "Visual Studio Code",
          src: require("@/assets/img/vscode.png"),
          link: "https://code.visualstudio.com",
        },
      ],
    };
  },
  mounted() {
    console.log("Skill Component mounted.");
  },
};
</script>

<style scoped>
/* Water Filling Effect */
.border-glass {
  background-color: transparent;
  border-radius: 0 0 20px 20px;
  background-image: url("https://priteshgupta.com/demos/fill/waves.png");
  background-repeat: repeat-x;
  background-size: 100%;
  background-position: 0 110px;
  -webkit-transition: all 3s ease-out;
  -moz-transition: all 3s ease-out;
  -o-transition: all 3s ease-out;
  transition: all 3s ease-out;
}
.border-glass:hover {
  background-image: url("https://priteshgupta.com/demos/fill/waves.png");
  background-size: 100% 60px;
  background-repeat: repeat-x;
  background-position: 100px 50px;
  -webkit-transition: all 3s ease-out;
  -moz-transition: all 3s ease-out;
  -o-transition: all 3s ease-out;
  transition: all 3s ease-out;
}
/* End Water Filling Effect */
</style>
