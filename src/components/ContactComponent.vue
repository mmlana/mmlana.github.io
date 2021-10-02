<template>
  <section class="mb-5" id="contact">
    <div class="p-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 bg-pattern-wind">
            <div class="desc">
              <div class="title" v-scroll-reveal="{ delay: 250 }">
                <h2 class="text-custom">
                  Contact
                </h2>
              </div>
              <p v-scroll-reveal="{ delay: 350 }">
                For hiring, business, or collaboration please contact me on the following platforms.
              </p>
              <div class="social-links py-3">
                <a href="mailto:muhammadmaulanaa17@gmail.com" target="_blank" v-scroll-reveal="{ delay: 700 }" title="muhammadmaulanaa17@gmail.com">
                  <font-awesome-icon icon="fa-solid fa-envelope" size="lg" />
                </a>
                <a href="https://www.linkedin.com/in/muhammadmaulanaa17/" target="_blank" v-scroll-reveal="{ delay: 800 }" title="LinkedIn">
                  <font-awesome-icon icon="fa-brands fa-linkedin" size="lg" />
                </a>
                <a href="https://twitter.com/MLana229" target="_blank" v-scroll-reveal="{ delay: 800 }" title="Twitter">
                  <font-awesome-icon icon="fa-brands fa-twitter" size="lg" />
                </a>
                <a href="https://www.instagram.com/mlana229/" target="_blank" v-scroll-reveal="{ delay: 800 }" title="Instagram">
                  <font-awesome-icon icon="fa-brands fa-instagram" size="lg" />
                </a>
                <a href="https://github.com/mmlana" target="_blank" v-scroll-reveal="{ delay: 700 }" title="GitHub">
                  <font-awesome-icon icon="fa-brands fa-github" size="lg" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5 text-center boxes" v-scroll-reveal="{ delay: 450 }"><img class="rounded img-fluid" :src="require('@/assets/img/box.png')" alt="boxes" /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log("Contact Component mounted.");
  },
  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.boxes {
  display: none;
}
@media (min-width: 992px) {
  .boxes {
    display: block !important;
  }
}
.social-links a {
  color: #212529;
  margin-right: 20px;
}
.social-links a:hover {
  color: #ff8788;
}
</style>
