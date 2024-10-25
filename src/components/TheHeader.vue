<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid justify-content-center">
      <div class="navbar-nav">
        <router-link
          to="/"
          class="nav-item nav-link"
          :class="$router.currentRoute.path === '/' ? 'active' : ''"
        >
          Home
        </router-link>
        <router-link
          to="/about"
          class="nav-item nav-link"
          :class="$router.currentRoute.path === '/about' ? 'active' : ''"
        >
          About
        </router-link>
        <router-link
          to="/classmates"
          class="nav-item nav-link"
          :class="$router.currentRoute.path === '/classmates' ? 'active' : ''"
        >
          Classmates
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
.navbar-nav .nav-link.active {
  color: #fff;
  font-weight: bold;
}
</style>