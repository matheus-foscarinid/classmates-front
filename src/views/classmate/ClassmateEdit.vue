<template>
  <div class="classmate-create container mt-5">
    <h2 class="mb-4">Updating {{ classmate.name }}</h2>
    <ClassmateForm 
      :initial-values="classmate"
      submit-label="Edit"
      @onFormSubmit="editClassmate"
    />
  </div>
</template>

<script>
import { getClassmate, editClassmate } from '@/services/classmate.service';
import ClassmateForm from '@/components/classmate/ClassmateForm.vue';

export default {
  name: 'ClassmateCreate',
  components: { ClassmateForm },
  data() {
    return {
      classmate: {},
    };
  },

  async mounted() {
    this.classmate = await getClassmate(this.$route.params.id);
  },

  methods: {
    async editClassmate(classmateInfos) {
      await editClassmate(classmateInfos);
      this.$router.push('/classmates');
    },
  }
};
</script>
