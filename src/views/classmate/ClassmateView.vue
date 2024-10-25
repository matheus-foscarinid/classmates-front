<template>
  <div class="classmate-view container mt-5">
    <button 
      class="btn btn-secondary mb-4"
      @click="goBack"
    >
      <i class="fa-solid fa-arrow-left"></i>
      Go Back
    </button>
    <div class="card shadow-sm">
      <div class="card-body">
        <h1 class="card-title mb-4">
          Information about Classmate <b>{{ classmate.name }}</b>
        </h1>

        <div class="card-text">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <strong>Name:</strong> {{ classmate.name }}
            </li>
            <li class="list-group-item">
              <strong>Email:</strong> {{ classmate.email }}
            </li>
            <li class="list-group-item">
              <strong>Age:</strong> {{ classmate.age }}
            </li>
            <li class="list-group-item">
              <strong>Registration Number:</strong> {{ classmate.registration_number }}
            </li>
            <li class="list-group-item">
              <strong>Registration Date:</strong> {{ classmateCreationDate }}
            </li>
          </ul>
        </div>

        <hr class="my-4">

        <div class="d-flex justify-content-between">
          <button 
            class="btn btn-lg btn-info"
            @click="openEditClassmate"
          >
            <i class="fa-solid fa-pen"></i>
            Edit Classmate
          </button>

          <button 
            class="btn btn-lg btn-danger"
            @click="deleteClassmate"
          >
            <i class="fa-solid fa-trash"></i>
            Delete Classmate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getClassmate, deleteClassmate } from '@/services/classmate.service';
import moment from 'moment';

export default {
  name: 'ClassmateView',
  data() {
    return {
      classmate: {}
    };
  },

  computed: {
    classmateCreationDate() {
      return moment(this.classmate.created_at).format('MM/DD/YY h:mm:ss');
    }
  },

  mounted() {
    this.getClassmateInfo();
  },

  methods: {
    async getClassmateInfo() {
      this.classmate = await getClassmate(this.$route.params.id);
    },
    async deleteClassmate() {
      await deleteClassmate(this.$route.params.id);
      this.$router.push('/classmates');
    },
    openEditClassmate() {
      this.$router.push(`/classmates/${this.classmate.id}/edit`);
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

.list-group-item {
  font-size: 1.25rem;
}
</style>