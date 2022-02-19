<template>
    <div class="col" v-if="!loading">
        <div class="text-center mt-3 mb-3">
            <p class="fs-4 fw-bold m-0">Title:</p>
            <p class="fs-5 m-0">{{ role.title }}</p>
        </div>
        <div class="text-center mt-3 mb-3">
            <p class="fs-4 fw-bold m-0">Job:</p>
            <p class="fs-5 m-0">{{ role.barotraumaJob }}</p>
        </div>
        <div class="text-center mt-3 mb-3">
            <p class="fs-4 fw-bold m-0">Goal:</p>
            <p class="fs-5 m-0">{{ role.goal }}</p>
        </div>
        <div class="text-center mt-3 mb-3">
            <p class="fs-4 fw-bold m-0">Win Condition:</p>
            <p class="fs-5 m-0">{{ role.winCondition }}</p>
        </div>
        <div class="text-center mt-3 mb-3" v-if="role.additionalInfo">
            <p class="fs-4 fw-bold m-0">Additional Info:</p>
            <p class="fs-5 m-0">{{ role.additionalInfo }}</p>
        </div>
        <div class="text-center mt-3 mb-3" v-if="role.tips">
            <p class="fs-4 fw-bold m-0">Tips:</p>
            <p class="fs-5 m-0">{{ role.tips }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
            role: Object
        };
    },

    created() {
        this.searchApi();
    },

    methods: {
        async searchApi() {
            const roleId = this.$route.params.roleId;
            await fetch(`https://localhost:7109/api/v1/role/${roleId}`)
                .then(async response => {
                    this.role = await response.json();
                    this.loading = false;
                })
                .catch(() => {
                    this.$router.push({ name: "not found" });
                });
        }
    }
}
</script>