import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView,
            meta: {
            progress: {
                func: [
                { call: "color", modifier: "temp", argument: "#ffb000" },
                { call: "fail", modifier: "temp", argument: "#6e0000" },
                { call: "location", modifier: "temp", argument: "top" },
                {
                    call: "transition",
                    modifier: "temp",
                    argument: { speed: "1.5s", opacity: "0.6s", termination: 400 },
                },
                ],
            },
            },
        },
    ],
});

export default router;
