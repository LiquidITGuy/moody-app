import AboutVue from "./components/AboutVue.vue";
import HelloWorld from "./components/HelloWorld.vue";
import MenuPrincipal from "./components/menuPrincipal/index.vue";

export const PAGE_NAME = {
    ABOUT: "a propos",
    HOME: "accueil"
}

import * as VueRouter from 'vue-router';
const defaultComponent = {
    header: {
        ...MenuPrincipal,
    },
}
const routes = [
    {
        path: '/',
        name: PAGE_NAME.HOME,
        components: {
            ...defaultComponent,
            main: HelloWorld
        },
    },
    {
        path: '/about',
        name:PAGE_NAME.ABOUT,
        components: {
            ...defaultComponent,
            main: AboutVue
        }
    },
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router
