<template>
  <div class="classmate-create container mt-5">
    <button 
      class="btn btn-secondary mb-4"
      @click="goBack"
    >
      <i class="fa-solid fa-arrow-left"></i>
      Go Back
    </button>
    <h2 class="mb-4">Create a New Classmate</h2>
    <ClassmateForm 
      submit-label="Create"
      @onFormSubmit="createClassmate"
    />
  </div>
</template>

<script>
import { createClassmate } from '@/services/classmate.service';
import ClassmateForm from '@/components/classmate/ClassmateForm.vue';

export default {
  name: 'ClassmateCreate',
  components: { ClassmateForm },
  methods: {
    async createClassmate(classmateInfos) {
      await createClassmate(classmateInfos);
      this.$router.push('/classmates');
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}

.card {
  border-radius: 0.5rem;
}

.card-body {
  padding: 2rem;
}

.card-title {
  font-size: 2rem;
  font-weight: bold;
}
</style>