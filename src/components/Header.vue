<script setup>
import { userStore } from '@/stores/userStore'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Stores
const auth = userStore()

// Computeds
const isLoggedIn = computed(() => auth.isAuthenticated)
const nameUser = computed(() => auth.user || '')
const rolUser = computed(() => auth.role)

// Métodos
function logout() {
    auth.logout()
    router.push('/login')
    console.log(auth.user, auth.role)
}

</script>

<template>
    <header class="page-header">
        <div class="user-container">
            <div class="title">
                <RouterLink to="/"><img src="/logo.png" alt="logo" /></RouterLink>
            </div>
            <nav class="user-nav">
                <ul class="user-nav-list">
                    <div v-if="rolUser === 'admin'">
                        <li>
                            <RouterLink to="/manageUsers">Gestionar usuarios</RouterLink>
                        </li>
                    </div>
                    <div v-if="rolUser === 'veterinario'">
                        <li>
                            <RouterLink to="/createProfile">Nueva ficha</RouterLink>
                        </li>
                    </div>
                    <div class="user-list-container" v-if="rolUser === 'cliente'">
                        <li>
                            <RouterLink to="/createQuestion">Realizar pregunta
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/questionsListUser">Ver mis preguntas</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'ProfileListFiltered', params: { id: 0 } }">Ver animales favoritos
                            </RouterLink>
                        </li>
                    </div>
                    <div class="user-list-container" v-if="isLoggedIn">
                        <li>
                            <a href="#" class="userName">{{ nameUser }}</a>
                        </li>
                        <li>
                            <a href="#" @click.prevent="logout">Cerrar sesión</a>
                        </li>
                    </div>
                    <li v-else>
                        <RouterLink to="/login">Iniciar sesión</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.userName {
    font-weight: bold;
}

.page-header {
    position: fixed;
    z-index: 10;
    width: 100%;
    background-color: white;
}

.user-list-container {
    display: flex;
    flex-direction: row;
    gap: 1.5em;
}

.user-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 5em;
    align-items: center;
    color: #1e3b21;
}

.title {
    display: flex;
    margin: auto 2em;
}

.title img {
    display: flex;
    align-items: center;
    width: 9.2em;
}

.user-nav {
    display: flex;
    margin: auto 2em;
}

.support-container {
    display: flex;
    flex-direction: row;
    gap: 1.6em;
}

.user-nav-list {
    display: flex;
    list-style: none;
    gap: 2em;
    justify-content: flex-end;
}

.user-nav-list li a {
    text-decoration: none;
    transition: color 0.3s ease;
    color: #2a3b1e;
}

.user-nav-list li a:hover {
    color: #2f9747;
}

@media (max-width: 1366px) {
    .page-header{
      font-size: 0.9em;
    }
}

</style>