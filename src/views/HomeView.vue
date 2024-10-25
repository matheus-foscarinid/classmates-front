<template>
  <div class="home d-flex align-items-center justify-content-center min-vh-100">
    <div class="jumbotron text-center">
      <h1 class="display-4">Welcome!</h1>
      <p class="lead">
        This site is a simple implementation of a CRUD of
        Classmates, which contains some specific fields.
      </p>
      <hr class="my-4">
      <div class="d-flex justify-content-center gap-1">
        <button 
          class="btn btn-lg btn-primary mt-3 mr-2"
          @click="$router.push('/classmates')"
        >
          See classmates
        </button>
        <button 
          class="btn btn-lg btn-secondary mt-3 ml-2"
          @click="$router.push('/about')"
        >
          About this project
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  background-color: #ffffff;
  border-radius: 0.3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 3rem;
}
</style>