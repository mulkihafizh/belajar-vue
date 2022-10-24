<template>
  <Navbar />
  <router-view />
  <Footer />
  <!-- To top -->
  <a href="#" class="btn btn-outline-dark px-0 back-to-top"
    ><i class="fa fa-angle-double-up"></i
  ></a>
</template>

<script>
import $ from "jquery";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  created() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });
    $(".back-to-top").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });
  },
};
</script>
