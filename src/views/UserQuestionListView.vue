<template>
  <main>
    <div class="mainContainer">
      <div class="contentContainer">
        <SideBar />
      </div>

      <div class="questionsContainer">
        <div v-if="isLoading" class="loadingText">Cargando preguntas...</div>
        <QuestionCard v-if="!isLoading" v-for="question in questionsFiltered" :key="question.id" :question="question" :is-detail="false"/>
      </div>
    </div>
        <ErrorMessage v-if="!isLoading && questionsFiltered.length === 0" text="No hay preguntas sobre este animal
            todavía"></ErrorMessage>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { userStore } from '@/stores/userStore'
import questionService from '@/services/questionService'
import QuestionCard from '@/components/QuestionCard.vue'
import SideBar from '../components/SideBar.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

export default {
  components: {
    ErrorMessage,
    QuestionCard,
    SideBar
  },
  setup() {
    // objetos
    const router = useRouter()

    // reactivos
    const isLoading = ref(true)
    const questionsFiltered = ref([])

    // se obtienen las preguntas al montar el componente
    onMounted(async () => {
      // se verifica la asesion del usuario y si n oesta iniciado sesion redirige el login
      const auth = userStore()
      if (!auth.isAuthenticated) {
        router.push('/login')
        return
      }
      isLoading.value = true
      try {
        questionsFiltered.value = await questionService.getQuestionByUserId(auth.id)
      } catch (error) {
        console.log('No se han podido obtenern las preguntas', error)
      } finally {
        isLoading.value = false
      }
    })

    return {
      questionsFiltered,
      isLoading
    }
  }
}
</script>

<style scoped>
label {
  margin-right: 0.5em;
}

.selectContainer {
  display: flex;
  justify-content: center;
  margin: 1.5em auto;
  flex-direction: row;
  width: 40%;
  align-items: center;
}

.select {
  padding: 0.5em 1em;
  border: 2px solid #c5a880;
  border-radius: 8px;
  background-color: #fff;
  color: #2d3e1f;
  font-weight: 500;
  font-size: 14px;
}

.select:focus {
  outline: none;
  border-color: #8bbd77;
  box-shadow: 0 0 0 2px rgba(139, 189, 119, 0.3);
}

.button {
  padding: 0.7em 1em;
  margin-left: 0.5em;
  border: none;
  border-radius: 8px;
  background-color: #5a8e2b;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.button:hover {
  background-color: #4b7b24;
}

.questionsContainer {
  margin-left: 15%;
  padding: 2em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  width: 85%;
  box-sizing: border-box;
}

.loadingText {
  grid-column: 1 / -1;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  color: #4a7543;
  animation: pulse 1.2s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.3;
  }

  50% {
    opacity: 1;
  }
}
</style>
