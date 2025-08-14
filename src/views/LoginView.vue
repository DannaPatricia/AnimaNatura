<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { userStore } from '@/stores/userStore'
import userService from '@/services/userService'

export default {
  setup() {
    // valores reactivos
    const userName = ref('')
    const password = ref('')
    const users = ref([])

    // se declara el objeto router para realizar los redireccionamientos
    const router = useRouter()

    // se declara el store
    const auth = userStore()

    onMounted(() => {
      // se hace uso del store de pinia para ocmprobar el inicio de sesion o para almacenar el usuario
      // redirige a la pagina de inicio si ya esta logeado
      if (auth.isAuthenticated) {
        router.push('/')
      }
      verifyUsers()
    })

    // funcion asincrona que simula la llamda a la api y modifica el valor del ususario
    async function verifyUsers() {
      try {
        users.value = await userService.getUsers()
      } catch (error) {
        console.error('Error al obtener los usuarios', error)
      }
    }

    // Maneja el login del usuario 
    const handleLogin = () => {
      const user = users.value.find(u => u.username === userName.value && u.password === password.value)

      // si se encuentra usuario
      if (user) {
        alert(`Inicio de sesión exitoso como ${user.role}`)
        // se almacenan los datos del usuario para poder usarlo en cualquier componente
        auth.setUser(user.username, user.role, user.id)
        router.push('/')
      } else {
        alert('Credenciales incorrectas. Verifica tu nombre de usuario y contraseña.')
      }
    }

    return {
      userName,
      password,
      handleLogin
    }
  }
}
</script>


<template>
  <main>
    <div class="login-container">
      <!-- se maneja el login al hacer submit -->
      <form class="login-form" @submit.prevent="handleLogin">
        <h1>Accede a AnimaNatura</h1>
        <p class="subtitle">Conéctate para descubrir y cuidar de tus animales favoritos</p>

        <label for="text">Nombre de usuario</label>
        <input type="text" v-model="userName" id="userName" required placeholder="Nombre de ususario" />

        <label for="password">Contraseña</label>
        <input type="password" v-model="password" id="password" required placeholder="********" />

        <button type="submit">Entrar</button>

        <p class="extra">
          ¿No tienes cuenta?
          <RouterLink to="/register">Regístrate aquí</RouterLink>
        </p>
        <p class="extra">
          ¡No te preocupes, puedes disfrutar de nuestro contenido sin registrarte!
        </p>
      </form>
    </div>
  </main>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  margin-top: 6em;
  margin-bottom: 2em;
  align-items: center;
  width: 100%;
}

.login-form {
  background-color: rgb(41, 57, 39);
  padding: 3em 2.5em;
  border-radius: 12px;
  width: 100%;
  max-width: 450px;
  box-shadow: #213b1e;
  color: white;
  animation: fadeIn 0.8s ease;
}

.login-form h1 {
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

.login-form label {
  display: block;
  margin-top: 1.2em;
  font-weight: 600;
  font-size: 1em;
}

.login-form input {
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

.login-form input:focus {
  box-shadow: 0 0 5px #a3e57e;
  outline: none;
}

.login-form button {
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

.login-form button:hover {
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
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1366px) {
  .login-container {
    margin-top: 2em;
    margin-bottom: 2em;
  }
}
</style>
