<template>
  <div class="classmates">
    <div class="jumbotron m-3 p-4">
      <h1 class="display-4 mb-4">
        Classmates List
        <small class="text-muted" style="font-size: 25px;">(total {{ classmates.length }})</small>
      </h1>
      
      <div class="mt-4">
        <button 
          class="btn btn-success mb-3"
          @click="openCreateClassmate"
        >
          <i class="fa-solid fa-plus"></i>
          Create Classmate
        </button>
        
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="classmate in classmates"
              :key="classmate.id"
            >
              <td>{{ classmate.id }}</td>
              <td>{{ classmate.name }}</td>
              <td>{{ classmate.email }}</td>
              <td class="d-flex gap-1">
                <button 
                  class="btn btn-sm btn-info" 
                  @click="openViewClassmate(classmate.id)"
                >
                  <i class="fa-solid fa-eye"></i>
                  View
                </button>

                <button 
                  class="btn btn-sm btn-danger" 
                  @click="deleteClassmate(classmate.id)"
                >
                  <i class="fa-solid fa-trash"></i>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getClassmates, deleteClassmate } from '@/services/classmate.service';

export default {
  name: 'ClassmatesList',
  data() {
    return {
      classmates: [],
    };
  },
  async mounted() {
    this.getClassmates();
  },
  methods: {
    async getClassmates() {
      this.classmates = await getClassmates();
    },
    async deleteClassmate(classmateId) {
      await deleteClassmate(classmateId);
      this.getClassmates();
    },
    openCreateClassmate() {
      this.$router.push('/classmates/create');
    },
    openViewClassmate(classmateId) {
      this.$router.push(`/classmates/${classmateId}`);
    },
  },
};
</script>

<style scoped>
.jumbotron {
  background-color: #fff;
  padding: 2rem 1rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.table-hover tbody tr:hover {
  background-color: #f1f1f1;
}
</style>