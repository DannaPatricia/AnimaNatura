<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { userStore } from '@/stores/userStore'

const username = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

// redirige a la pagina de inicio si ya esta logeado
const auth = userStore()
if (auth.isAuthenticated) {
  router.push('/')
}

const handleRegister = () => {
  if (username.value && email.value && password.value) {
    alert(`Registro exitoso para: ${username.value}`)
    router.push('/')
  } else {
    alert("Por favor completa todos los campos.")
  }
}
</script>

<template>
  <main>
    <div class="register-container">
      <form class="register-form" @submit.prevent="handleRegister">
        <h1>Regístrate en AnimaNatura</h1>
        <p class="subtitle">Únete para explorar y cuidar de los animales</p>

        <label for="username">Nombre de usuario</label>
        <input type="text" v-model="username" id="username" required placeholder="tu_usuario123" />

        <label for="email">Correo electrónico</label>
        <input type="email" v-model="email" id="email" required placeholder="correo@ejemplo.com" />

        <label for="password">Contraseña</label>
        <input type="password" v-model="password" id="password" required placeholder="********" />

        <button type="submit">Crear cuenta</button>

        <p class="extra">
          ¿Ya tienes cuenta?
          <RouterLink to="/login">Inicia sesión aquí</RouterLink>
        </p>
      </form>
    </div>
  </main>
</template>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  margin-top: 5em;
  margin-bottom: 2em;
  align-items: center;
  width: 100%;
}

.register-form {
  background-color: rgb(41, 57, 39);
  padding: 3em 2.5em;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  color: white;
  animation: fadeIn 0.8s ease;
}

.register-form h1 {
  text-align: center;
  margin-bottom: 0.5em;
  font-size: 2em;
}

.subtitle {
  text-align: center;
  font-size: 1em;
  color: #dddddd;
  margin-bottom: 2em;
}

.register-form label {
  display: block;
  margin-top: 1.2em;
  font-weight: 600;
  font-size: 1em;
}

.register-form input {
  width: 100%;
  padding: 1em;
  margin-top: 0.4em;
  border: none;
  border-radius: 8px;
  background-color: #f5f5f5;
  font-size: 1em;
  color: #333;
  transition: box-shadow 0.3s ease;
}

.register-form input:focus {
  box-shadow: 0 0 5px #a3e57e;
  outline: none;
}

.register-form button {
  width: 100%;
  padding: 1em;
  margin-top: 2em;
  background-color: #60af5b;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s ease;
}

.register-form button:hover {
  background-color: #4e994c;
}

.extra {
  margin-top: 1.8em;
  text-align: center;
  font-size: 0.95em;
}

.extra a {
  color: #a3e57e;
  text-decoration: none;
}

.extra a:hover {
  text-decoration: underline;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1366px) {
  .register-container {
    margin-top: 2em;
    margin-bottom: 2em;
  }
}
</style>
