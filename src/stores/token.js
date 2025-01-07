//定义store
import { defineStore } from "pinia";
import { ref } from "vue";

export const userTokenStore = defineStore('token', () => {
    const token = ref('')
    const setToken = (newToken) => {
        token.value = newToken
    }
    const removeToken = () => {
        token.value = ''
    }
    return {
        token, setToken, removeToken
    }
}, {
    persist: true
}
)
