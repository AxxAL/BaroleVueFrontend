<script>
export default {
  props: {
    roles: Array
  }
}
</script>

<template>
 
 <div class="row justify-content-center">
    <router-link v-for="role in roles" :key="role.id" :to="`/role/${ role.id }`" class="col-2 fs-6 text-center text-decoration-none">
      {{ role.title }}
    </router-link>
  </div>
  
</template>
