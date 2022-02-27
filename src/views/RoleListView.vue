<template>
    <p class="fs-2 text-center">All Roles</p>
    <LoadingBarVue v-if="!recievedData"/>
    <div class="row d-flex justify-content-center" v-else>
        <div v-for="role in rolesArray" :key="role.id" class="col-sm-3 mb-2 fs-6 text-center text-decoration-none">
            <RoleCard :role="role"/>
        </div>
    </div>
</template>

<script>
import LoadingBar from "../components/LoadingBar.vue";
import RoleCard from "../components/RoleCard.vue";
import { sortBy } from "lodash";

export default {
  components: {
    LoadingBar,
    RoleCard
  },

  data() {
    return {
      rolesArray: Array,
      recievedData: false
    }
  },

  mounted() {
    this.fetchRoles();
  },

  methods: {
    async fetchRoles() {
      await fetch("https://baroleapi.axxal.net/api/v1/role/all")
        .then(async response => {
          response = await response.json();
          this.rolesArray = sortBy(response, [role => role.title.toLowerCase()], ["asc"]);
          this.recievedData = true;
        })
        .catch(error => console.error(error));
    }
  }
}
</script>