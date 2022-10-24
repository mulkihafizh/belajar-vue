<template>
  <div>
    <nav
      class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5 d-flex justify-content-between"
    >
      <router-link class="navbar-brand px-5" to="/">
        <h4 class="m-0" style="font-size: 2.5rem">
          <span class="text-primary">F</span>Hoodie
        </h4>
      </router-link>
      <router-link class="text-primary ms-auto px-5" to="/forum"
        >Forum</router-link
      >
      <router-link class="btn btn-outline-info" to="/contact">
        Contact Me</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style></style>
