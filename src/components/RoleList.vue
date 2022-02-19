<script>
export default {
    data() {
        return {
            roles: null
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
            console.log(this.roles);
        })
        .catch(error => console.error(error));
    }
  }
}
</script>

<template>
  <main>
        <ul>
            <h2>Role list:</h2>
            <li v-for="role in roles" :key="role.Id">
                Title: {{ role.title }}<br>
                Job: {{ role.barotraumaJob }}
            </li>
        </ul>
  </main>
</template>
