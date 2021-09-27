<template>
  <div>
    <navbar-component>
      <template v-slot:list-menu>
        <scrollactive active-class="active">
          <ul class="navbar-nav">
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <a class="nav-link scrollactive-item" href="#hero">Home</a>
            </li>
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <a class="nav-link scrollactive-item" href="#about">About</a>
            </li>
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <a class="nav-link scrollactive-item" href="#tools-skills">Tools & Skills</a>
            </li>
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <a class="nav-link scrollactive-item" href="#portofolios">Portofolios</a>
            </li>
          </ul>
        </scrollactive>
      </template>
    </navbar-component>
    <hero-component></hero-component>
    <about-component></about-component>
    <skills-component></skills-component>
    <portofolios-component></portofolios-component>
  </div>
</template>

<script>
import AboutComponent from "./components/AboutComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import PortofoliosComponent from "./components/PortofoliosComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";

export default {
  components: { NavbarComponent, HeroComponent, AboutComponent, SkillsComponent, PortofoliosComponent },
};
</script>

<style>
#app {
  font-family: "Poppins", "Nunito", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
