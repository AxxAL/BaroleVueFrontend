<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Barole <span class="fs-6 opacity-25">v1</span></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/role/all">All Roles</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/role/random">Random Roles</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" v-model="query" placeholder="Search roles by title">
        <button class="btn btn-outline-success" @click="searchApi"><i class="bi bi-search"></i></button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    }
  },

  methods: {
    async searchApi(event) {
      event.preventDefault();

      await fetch(`https://baroleapi.axxal.net/api/v1/role/titleSearch/${this.query}`)
        .then(async result => {
          result = await result.json();
          this.$router.push({ name: "detailed role", params: { roleId: result[0].id } });
        })
        .catch(() => {
          this.$router.push({ name: "not found" })
        });
    }
  }
}
</script>