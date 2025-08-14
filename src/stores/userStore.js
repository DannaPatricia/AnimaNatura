import { defineStore } from 'pinia'

// se define el store
export const userStore = defineStore('auth', {
    // se definen los datos que se van a almacenar en el store
    state: () => ({
        user: null,
        id: null,
        role: null,
        isAuthenticated: false
    }),
    // funciones para modificar las propiedades del store
    actions: {
        setUser(user, role, id) {
            this.user = user
            this.role = role
            this.id = id
            this.isAuthenticated = true
        },
        logout() {
            this.user = null
            this.role = null
            this.id = null
            this.isAuthenticated = false
        }
    }
})
