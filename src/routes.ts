import AboutVue from "./components/AboutVue.vue";
import HelloWorld from "./components/HelloWorld.vue";
import MenuPrincipal from "./components/menuPrincipal/index.vue";
import SuiviDeLhumeur from "./components/suiviDeLhumeur/affichageSuiviDeLhumeur.vue";

export const PAGE_NAME = {
    ABOUT: "a propos",
    HOME: "accueil",
    MOOD: "suivi humeur",
    ADD_MOOD: "Ajout d'humeur",
}

import * as VueRouter from 'vue-router';
import SaisieSuiviDeLhumeur from "./components/suiviDeLhumeur/SaisieSuiviDeLhumeur.vue";
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
    {
        path: '/humeur',
        name:PAGE_NAME.MOOD,
        components: {
            ...defaultComponent,
            main: SuiviDeLhumeur
        }
    },
    {
        path: '/ajout-humeur',
        name:PAGE_NAME.ADD_MOOD,
        components: {
            ...defaultComponent,
            main: SaisieSuiviDeLhumeur
        }
    },
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router
