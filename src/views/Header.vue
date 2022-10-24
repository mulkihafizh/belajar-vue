<template>
  <div
    class="blue container-fluid d-flex align-items-center mb-5 py-5"
    id="home"
    style="min-height: 100vh"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 text-center text-left">
          <h3 class="text-white font-weight-normal mb-3">Hello, My name is</h3>
          <h1
            class="display-3 text-uppercase text-white mb-2"
            style="-webkit-text-stroke: 3px #fff"
          >
            {{ data.name }}
          </h1>
          <div
            class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5"
          >
            <a
              href="https://drive.google.com/file/d/1oFySr1gQ6MtosAit6EEJpqNgA1i4Wlpg/view?usp=sharing"
              target="_blank"
              class="btn btn-white m-auto"
              download
              >Download CV</a
            >
          </div>
        </div>
        <div class="col-lg-5 mx-auto px-8 pl-lg-0 pb-5 pb-lg-4 about-img">
          <img
            class="img-fluid shadow-sm rounded-circle mt-5 m-auto"
            src="../assets/img/profile.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "HeaderPage",
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/user")
      .then((response) => this.setData(response.data))
      .catch((error) => console.log("failed", error));
  },
  methods: {
    setData(data) {
      this.data = data;
    },
  },
};
</script>
