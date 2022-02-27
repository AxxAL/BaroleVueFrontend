<script>
export default {
  props: {
    roles: Array
  }
}
</script>

<template>
 <div class="row">
    <router-link v-for="role in roles" :key="role.id" :to="`/role/${ role.id }`" class="col-sm-3 mb-2 fs-6 text-center text-decoration-none">
      {{ role.title }}
    </router-link>
  </div>
</template>
