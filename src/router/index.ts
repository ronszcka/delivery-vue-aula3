import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/home/HomeView.vue";
import PedidoView from "../views/pedido/PedidoView.vue";
import NotFoundView from "../views/notfound/NotFoundView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/pedido",
            name: "pedido",
            component: PedidoView,
        },
        {
            path: "/:catchAll(.*)",
            name: "notfound",
            component: NotFoundView,
        }
    ]
});

export default router;
