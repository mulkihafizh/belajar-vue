<template>
  <div class="container-fluid py-5" id="skill">
    <div class="container">
      <div
        class="position-relative d-flex align-items-center justify-content-center"
      >
        <h1 class="mb-5 text-uppercase text-primary">My Skills</h1>
      </div>
      <div class="row align-items-center justify-content-center">
        <div
          class="skill mb-4 w-50"
          v-for="(skill, index) in skills"
          :key="skill.id"
        >
          <div class="d-flex justify-content-between">
            <h6 class="font-weight-bold">{{ skill.name }}</h6>
            <h6 class="font-weight-bold">{{ skill.percen }}</h6>
          </div>
          <div class="progress">
            <div
              class="progress-bar"
              :class="colors[index]"
              role="progressbar"
              :aria-valuenow="skill.percen"
              :style="{ width: skill.percen + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SkillPage",
  data() {
    return {
      colors: [
        "bg-secondary",
        "bg-info",
        "bg-primary",
        "bg-warning",
        "bg-success",
        "bg-danger",
      ],
      skills: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/skills")
      .then((response) => (this.skills = response.data))
      .catch((error) => console.log("failed", error));
  },
};
</script>
