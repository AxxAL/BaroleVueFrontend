<template>
    <div class="align-self-center">
        <label for="sampleSizeInput">Sample size</label>
        <input type="number" name="sampleSizeInput" v-model="amountOfRolesToRandomize">
        <button class="btn btn-primary" @click="shuffleRoles">Randomize!</button>
    </div>
    <RoleListVue :roles="randomizedRoles" />
</template>

<script>
import RoleListVue from "../components/RoleList.vue";
import { sampleSize } from "lodash";

export default {
    components: {
        RoleListVue
    },

    data() {
        return {
            randomizedRoles: [],
            amountOfRolesToRandomize: 3,
            allRoles: Array
        }
    },

    created() {
        this.fetchRoles();
    },

    methods: {
        async fetchRoles() {
            await fetch("https://localhost:7109/api/v1/role/all")
                .then(async response => {
                    this.allRoles = await response.json();
                    this.recievedData = true;
                    this.shuffleRoles();
                })
                .catch(error => console.error(error));
        },

        shuffleRoles() {
            this.randomizedRoles = sampleSize(this.allRoles, this.amountOfRolesToRandomize);
        }
    }
}
</script>

<style scoped>

</style>