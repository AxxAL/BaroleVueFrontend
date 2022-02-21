<template>
  <p class="fs-2 text-center">All Roles</p>
  <LoadingBarVue v-if="!recievedData"/>
  <RoleList :roles="rolesArray" v-else/>
</template>

<script>
import RoleList from "../components/RoleList.vue";
import LoadingBarVue from "../components/LoadingBar.vue";

export default {
  components: {
    LoadingBarVue,
    RoleList
  },

  data() {
    return {
      rolesArray: Array,
      recievedData: false
    }
  },

  created() {
    this.fetchRoles();
  },

  methods: {
    async fetchRoles() {
      await fetch("https://localhost:7109/api/v1/role/all")
        .then(async response => {
          this.rolesArray = await response.json();
          this.recievedData = true;
        })
        .catch(error => console.error(error));
    }
  }
}
</script>