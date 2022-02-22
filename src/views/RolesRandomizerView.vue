<template>
    <RoleList :roles="randomizedRoles"/>
    <label class="row text-center" for="sampleSizeInput">Sample size</label>
    <input class="row mb-1" type="number" name="sampleSizeInput" v-model="amountOfRolesToRandomize">
    <button class="btn btn-primary row" @click="shuffleRoles">Randomize!</button>
</template>

<script>
import RoleList from "../components/RoleList.vue";
import { sampleSize } from "lodash";

export default {
    components: {
        RoleList
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