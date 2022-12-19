import { defineStore } from "pinia";

const useFlags = defineStore('flags', {
    state: () => ({
        topScroll: false
    }),
    actions: {
        setTopScroll(status) {
            this.topScroll = status;
        }
    }
})

export default useFlags;