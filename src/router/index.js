import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import RoleListView from "../views/RoleListView.vue";
import DetailedRoleView from "../views/DetailedRoleView.vue";
import NotFoundView from "../views/errors/NotFoundView.vue";
import RolesRandomizerView from "../views/RolesRandomizerView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/role/all",
            name: "role list",
            component: RoleListView
        },
        {
            path: "/role/:roleId",
            name: "detailed role",
            component: DetailedRoleView
        },
        {
            path: "/role/random",
            name: "random roles",
            component: RolesRandomizerView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not found",
            component: NotFoundView
        }
    ],
});

export default router;
