<template>
  <form 
    @submit.prevent="submitForm" 
    class="p-4 card"
    >
    <div class="form-group mb-3">
      <label for="name">Name</label>
      <input 
        v-model="classmate.name"
        type="text"
        id="name"
        class="form-control"
        placeholder="Enter name"
      />
    </div>

    <div class="form-group mb-3">
      <label for="email">Email</label>
      <input 
        v-model="classmate.email"
        type="email"
        id="email"
        class="form-control"
        placeholder="Enter email"
      />
    </div>

    <div class="form-group mb-3">
      <label for="age">Age</label>
      <input 
        v-model="classmate.age"
        type="number"
        id="age"
        class="form-control"
        placeholder="Enter age"
      />
    </div>

    <div class="form-group mb-3">
      <label for="registration_number">Registration Number</label>
      <input 
        v-model="classmate.registration_number"
        type="text"
        id="registration_number"
        class="form-control"
        placeholder="Enter registration number"
      />
    </div>

    <div class="button-container">
      <button 
        type="submit" 
        class="btn btn-primary mt-3"
      >
        <i class="fa-solid fa-paper-plane"></i>
        {{ submitLabel }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ClassmateForm',
  data() {
    return {
      classmate: {},
    };
  },
  props: {
    initialValues: {
      type: Object,
      required: false
    },
    submitLabel: {
      type: String,
      default: 'Submit'
    }
  },
  watch: {
    initialValues: {
      handler() {
        this.classmate = { ...this.initialValues };
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    submitForm() {
      this.$emit('onFormSubmit', this.classmate);
      this.classmate = { ...this.initialValues }; // Reset to initial values
    }
  }
};
</script>

<style scoped>


.form-group label {
  font-weight: bold;
}

.form-control {
  border-radius: 0.25rem;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}
</style>