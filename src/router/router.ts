import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "menu",
        component: () => import("../components/CanistersList.vue")
    },
    {
        path: "/canisters",
        alias: "/canisters",
        name: "canisters",
        component: () => import("../components/CanistersList.vue")
    },
    {
        path: "/canisters/:id",
        name: "canister-details",
        component: () => import("../components/Canister.vue")
    },
    {
        path: "/add",
        name: "add",
        component: () => import("../components/AddCanister.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;