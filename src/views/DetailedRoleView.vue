<template>
    <LoadingBarVue v-if="!recievedData"/>
    
    <div class="col" v-else>
        <div class="text-center mt-3 mb-3">
            <p class="fs-4 fw-bold m-0">Title:</p>
            <p class="fs-5 m-0" v-text="role.title"></p>
        </div>
        <div class="text-center mt-3 mb-3">
            <p class="fs-4 fw-bold m-0">Job:</p>
            <p class="fs-5 m-0" v-text="role.barotraumaJob"></p>
        </div>
        <div class="text-center mt-3 mb-3">
            <p class="fs-4 fw-bold m-0">Goal:</p>
            <p class="fs-5 m-0" v-text="role.goal"></p>
        </div>
        <div class="text-center mt-3 mb-3">
            <p class="fs-4 fw-bold m-0">Win Condition:</p>
            <p class="fs-5 m-0" v-text="role.winCondition"></p>
        </div>
        <div class="text-center mt-3 mb-3" v-if="role.additionalInfo">
            <p class="fs-4 fw-bold m-0">Additional Info:</p>
            <p class="fs-5 m-0" v-text="role.additionalInfo"></p>
        </div>
        <div class="text-center mt-3 mb-3" v-if="role.tips">
            <p class="fs-4 fw-bold m-0">Tips:</p>
            <p class="fs-5 m-0" v-text="role.tips"></p>
        </div>
    </div>
</template>

<script>
import LoadingBar from "../components/LoadingBar.vue";

export default {
    components: {
        LoadingBar
    },

    data() {
        return {
            recievedData: false,
            role: Object
        };
    },

    mounted() {
        this.searchApi();
    },

    methods: {
        async searchApi() {
            const roleId = this.$route.params.roleId;
            await fetch(`https://baroleapi.axxal.net/api/v1/role/${roleId}`)
                .then(async response => {
                    this.role = await response.json();
                    this.recievedData = true;
                })
                .catch(() => {
                    this.$router.push({ name: "not found" });
                });
        }
    }
}
</script>