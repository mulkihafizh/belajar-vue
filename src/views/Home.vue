<template>
  <div>
    <Header />
    <About />
    <Skill />
    <Quality />
    <Service />
  </div>
</template>

<script>
import Header from "./Header.vue";
import About from "./About.vue";
import Quality from "./Quality.vue";
import Skill from "./Skill.vue";
import Service from "./Service.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    About,
    Quality,
    Skill,
    Service,
  },
};
</script>

<style></style>
