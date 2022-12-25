import { defineStore } from "pinia";

const useNav = defineStore('nav', {
    state: () => ({
        navList: []
    }),
    actions: {
        setNavList(payload) {
            this.navList = payload;
        }
    }
})

export default useNav;