<template>
  <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ role.title }}</h5>
            <p class="card-text">{{ role.barotraumaJob }}</p>
            <router-link :to="`/role/${ role.id }`" class="btn btn-primary">Detailed view</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        role: Object
    }
}
</script>

<style>

</style>