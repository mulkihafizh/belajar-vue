<template>
  <div class="container-fluid pt-5">
    <div class="container">
      <div
        class="service-h4 position-relative d-flex align-items-center justify-content-center"
      >
        <h1 class="mb-5 text-upppercase text-primary">My Services</h1>
      </div>
      <div class="d-flex align-items-center justify-content-center pb-3">
        <div
          class="service-box w-25 text-center mb-5"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="d-flex align-items-center justify-content-center mb-4">
            <i
              class="fa fa-2x fa-laptop-code service-icon blue text-white m-2 p3"
            ></i>
            <h4 class="font-weight-bold m-0 text-capitalize">
              {{ service.name }}
            </h4>
          </div>
          <p>{{ service.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ServicePage",
  data() {
    return {
      services: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/services")
      .then((response) => this.setData(response.data))
      .catch((error) => console.log("failed", error));
  },
  methods: {
    setData(data) {
      this.services = data;
    },
  },
};
</script>
