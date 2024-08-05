import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ShopDetail from "@/views/ShopDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "about", component: Home },

    { path: "/:id", name: "card-detail", component: ShopDetail },
  ],
});

export default router;
