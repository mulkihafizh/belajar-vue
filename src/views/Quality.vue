<template>
  <div class="container-fluid py-5" id="qualification">
    <div class="container">
      <div
        class="position-relative d-flex align-items-center justify-content-center"
      >
        <h1 class="mb-5 text-uppercase text-primary">Education & Experience</h1>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h3 class="mb-5">My Education</h3>
          <div
            class="border-left border-primary"
            style="padding-left: 20px; padding-right: 20px"
          >
            <div
              class="position-relative ex-me mb-4"
              v-for="education in educations"
              :key="education.id"
            >
              <i
                class="far fa-dot-circle text-primary position-absolute d-block"
                style="top: 2px; left: -35px; font-size: 22px"
              ></i>
              <h5 class="font-weight-bold mb-1 text-capitalize">
                {{ education.department }}
              </h5>
              <p class="mb-2 text-capitalize">
                <strong>{{ education.school }}</strong> |
                <small
                  >{{ education.start_year }} -
                  {{ education.end_year ? education.end_year : "Now" }}</small
                >
              </p>
              <p>{{ education.desc }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="mb-5">My Experiences</h3>
          <div
            class="border-left border-primary ml-2"
            style="padding-left: 20px; padding-right: 20px"
          >
            <div
              class="position-relative ex-me mb-4"
              v-for="(experience, index) in experiences"
              :key="index"
            >
              <i
                class="far fa-dot-circle text-primary position-absolute d-block"
                style="top: 2px; left: -35px; font-size: 22px"
              ></i>
              <h5 class="font-weight-bold mb-1 text-capitalize">
                {{ experience.position }}
              </h5>
              <p class="mb-2 text-capitalize">
                <strong>{{ experience.company }}</strong> |
                <small
                  >{{ experience.start_date }} -
                  {{ experience.end_date ? experience.end_date : "Now" }}</small
                >
              </p>
              <p>{{ experience.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "QualityPage",
  data() {
    return {
      educations: [],
      experiences: [],
    };
  },
  mounted() {
    this.getEducations();
    this.getExperiences();
  },
  methods: {
    getEducations() {
      axios
        .get("http://localhost:3000/educations")
        .then((response) => (this.educations = response.data))
        .catch((error) => console.log("failed", error));
    },
    getExperiences() {
      axios
        .get("http://localhost:3000/experiences")
        .then((response) => (this.experiences = response.data))
        .catch((error) => console.log("failed", error));
    },
  },
};
</script>
