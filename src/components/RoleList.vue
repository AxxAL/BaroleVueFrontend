<script>
export default {
  data() {
    return {
      roles: Array
    }
  },

  created() {
    this.fetchRoles();
  },

  methods: {
    async fetchRoles() {
      await fetch("https://localhost:7109/api/v1/role/all")
        .then(async response => {
          this.roles = await response.json();
        })
        .catch(error => console.error(error));
    }
  }
}
</script>

<template>
  <div class="row">
    <router-link v-for="role in roles" :key="role.id" :to="`/role/${ role.id }`" class="col-2 text-center text-decoration-none">
      {{ role.title }}
    </router-link>
  </div>
</template>
