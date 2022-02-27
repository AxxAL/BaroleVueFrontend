<template>
    <LoadingBarVue v-if="!recievedData"/>
    <div class="row d-flex justify-content-center" v-else>
        <div v-for="role in randomizedRoles" :key="role.id" class="col-sm-3 mb-2 fs-6 text-center text-decoration-none">
            <RoleCard :role="role"/>
        </div>
    </div>
    <div class="row d-flex justify-content-center">
        <label class="opacity-75" for="sampleSizeInput">Sample size:</label>
        <input class="mb-2" type="number" name="sampleSizeInput" v-model="amountOfRolesToRandomize">
        <button class=" btn btn-primary" @click="shuffleRoles">Randomize!</button>
    </div>
</template>

<script>
import { sampleSize } from "lodash";
import LoadingBar from "../components/LoadingBar.vue";
import RoleCard from "../components/RoleCard.vue";

export default {
    components: {
        LoadingBar,
        RoleCard
    },

    data() {
        return {
            randomizedRoles: [],
            amountOfRolesToRandomize: 3,
            allRoles: Array,
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