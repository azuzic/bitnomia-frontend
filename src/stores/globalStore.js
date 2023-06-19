import { defineStore } from "pinia";

export const useGlobalStore = defineStore("globalStore", {
    state: () => ({
        loaded1: false,
        loaded2: false,
        loaded3: false
    }),
    actions: {

    },
});
