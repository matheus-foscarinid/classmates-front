<template>
  <div class="about d-flex align-items-center justify-content-center min-vh-100">
    <div class="jumbotron text-center p-3">
      <h1 class="display-4 mb-4">About</h1>

      <p class="lead">
        This project was created for learning purposes using the powerful 
        <b>Vue</b> framework, which was used throughout the development of this project.
      </p>

      <p class="lead">
        A simple yet powerful API was implemented for this project using 
        <b>Ruby on Rails</b>, another powerful technology.
      </p>

      <p class="lead">
        To access the API repository used for this project, click this link: 
        <a href="https://github.com/matheus-foscarinid/classmates_api">API</a>
      </p>

      <hr class="my-4">

      <p class="lead pt-1 extra">
        P.S: For more information about the project, visit my <a href="https://github.com/matheus-foscarinid">repositories</a> :)
      </p>
      
      <div class="icon-container mt-4 d-flex align-items-center justify-content-center">
        <img class="icon" src="https://avatars.githubusercontent.com/u/57161520?v=4" />
        <div class="text-container ml-3">
          <span class="name">Matheus Dias</span>
          <span class="title">Fullstack Developer</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  background-color: #ffffff;
  border-radius: 0.3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.icon-container {
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.icon {
  border-radius: 50%;
  width: 70px;
}

.name {
  font-size: 15px;
  font-weight: bold;
  color: #333;
}

.title {
  font-size: 12px;
  color: #666;
}

.extra {
  font-size: 12px;
  opacity: 0.7;
}
</style>