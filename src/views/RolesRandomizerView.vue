<template>
    <RoleList :roles="randomizedRoles"/>
    <div class="col">
        <label class="row" for="sampleSizeInput">Sample size</label>
        <input class="row" type="number" name="sampleSizeInput" v-model="amountOfRolesToRandomize">
        <button class="row btn btn-primary" @click="shuffleRoles">Randomize!</button>
    </div>
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
            await fetch("https://baroleapi.axxal.net/api/v1/role/all")
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