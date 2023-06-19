import { defineStore } from "pinia";

export const useGlobalStore = defineStore("globalStore", {
    state: () => ({
        loaded0: false,
        loaded1: false,
        loaded2: false,
        loaded3: false,
        showSplines: true
    }),
    actions: {

    },
});
