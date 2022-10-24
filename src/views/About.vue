<template>
  <div class="container-fluid py-5" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 pb-4">
          <img src="../assets/img/profile.jpg" width="450" alt="" />
        </div>
        <div class="col-lg-7">
          <h1 class="text-uppercase text-primary mb-4">About Me</h1>
          <h3 class="mb-4">UI/UX Designer & Web Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, quae quia. Ipsam, soluta vero iusto molestiae nesciunt
            sit. Consequuntur sequi illum nihil, odit id ut! Eum eius facere
            nobis sint!
          </p>
          <div class="row mb-3">
            <div class="col-sm-6 py-2">
              <h6>
                Name:
                <span class="text-secondary text-capitalize">{{
                  user.name
                }}</span>
              </h6>
            </div>
            <div class="col-sm-6 py-2">
              <h6>
                Birthday:
                <span class="text-secondary text-capitalize">{{
                  user.birthday
                }}</span>
              </h6>
            </div>
            <div class="col-sm-6 py-2">
              <h6>
                Phone:
                <span class="text-secondary text-capitalize">{{
                  user.phone
                }}</span>
              </h6>
            </div>
            <div class="col-sm-6 py-2">
              <h6>
                Email:
                <span class="text-secondary">{{ user.email }}</span>
              </h6>
            </div>
            <div class="col-sm-6 py-2">
              <h6>
                Address:
                <span class="text-secondary text-capitalize">{{
                  user.address
                }}</span>
              </h6>
            </div>
            <div class="col-sm-6 py-2">
              <h6>
                Freelance:
                <span class="text-secondary" v-if="user.freelance"
                  >Available</span
                >
                <span class="text-secondary" v-else>Available</span>
              </h6>
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
  name: "AboutPage",
  data() {
    return {
      user: {},
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
      this.user = data;
    },
  },
};
</script>
