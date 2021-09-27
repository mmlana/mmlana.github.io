<template>
  <section class="mb-5" id="portofolios">
    <div class="p-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 bg-pattern-wind">
            <div class="title" v-scroll-reveal="{ delay: 250 }">
              <h2 class="text-custom">
                Portofolios
              </h2>
            </div>
            <div class="row align-items-center">
              <div class="col-lg-4" v-for="(project, index) in projects" v-bind:key="project.id" v-scroll-reveal="{ delay: index * 200 + 50 }">
                <cards-component :data-image="project.src" :data-link="project.link">
                  <h3 slot="header" class="text-custom">
                    {{ project.title }}
                  </h3>
                  <p slot="content">
                    {{ project.desc }}
                  </p>
                </cards-component>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardsComponent from "./CardsComponent.vue";

export default {
  components: { CardsComponent },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Kingdom Business Community",
          src: require("@/assets/img/portofolios/kbc.png"),
          link: "https://kbc.or.id",
          desc: "KBC adalah orginisasi non-profit yang berfokus untuk memperlengkapi profesional dalam 'transformasi pola pikir'.",
        },
        {
          id: 2,
          title: "Tequisa Indonesia",
          src: require("@/assets/img/portofolios/tequisa.png"),
          link: "https://tequisaindonesia.com",
          desc: "Tequisa Indonesia adalah perusahaan yang bergerak di bidang distribusi produk akuakultur dan pengelolahan hasil perikanan.",
        },
        {
          id: 3,
          title: "Discovery Property",
          src: require("@/assets/img/portofolios/discovery_property.png"),
          link: "https://discoveryproperty.id",
          desc: "Discovery Property merupakan perusahaan yang bergerak dalam bidang sewa dan jual beli harta, berupa tanah dan bangunan.",
        },
        {
          id: 4,
          title: "FriendLink Singapore",
          src: require("@/assets/img/portofolios/friendlink_singapore.png"),
          link: "https://friendlinksingapore.com",
          desc: "FriendLink membantu mencari informasi mengenai kesehatan atau membutuhkan perawatan medis di Singapura, KL, dan Penang.",
        },
        {
          id: 5,
          title: "NOII by Carolliem",
          src: require("@/assets/img/portofolios/noii.png"),
          link: "https://noiibycarolliem.com",
          desc: "Noii merupakan MUA ( Make Up Artist ) yang berlokasi di Bandung.",
        },
      ],
    };
  },
  mounted() {
    console.log("Portofolio Component mounted.");
  },
};
</script>

<style scoped></style>
