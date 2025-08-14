<template>
  <main>
    <form class="selectContainer" @submit.prevent="submitFilter">
      <label for="animalType">Filtrar preguntas por tipo de animal</label>
      <select v-model="selectedType" id="animalType" class="select">
        <option disabled value="">Selecciona un tipo</option>
        <option value="0">Todos</option>
        <option v-for="type in animalTypes" :key="type.id" :value="type.id">
          {{ type.name }}
        </option>
      </select>
      <button type="submit" class="button">Filtrar</button>
    </form>

    <div class="mainContainer">
      <div class="contentContainer">
        <SideBar />
      </div>

      <div class="questionsContainer">
        <div v-if="isLoading" class="loadingText">Cargando preguntas...</div>
        <QuestionCard v-if="!isLoading" v-for="question in questionsFiltered" :key="question.id" :question="question"
          :is-detail="false" />
      </div>
    </div>
    <ErrorMessage v-if="!isLoading && questionsFiltered.length === 0" text="No hay preguntas sobre este animal
            todavía"></ErrorMessage>
  </main>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import questionService from '@/services/questionService'
import animalTypesService from '@/services/animalTypesService'
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
    const route = useRoute()
    const router = useRouter()

    // reactivos
    const selectedType = ref(route.params.id || 0)
    const animalTypes = ref([])
    const isLoading = ref(true)
    const questionsFiltered = ref([])

    const loadQuestions = async (id) => {
      isLoading.value = true
      try {
        const typeId = Number(id)
        if (typeId === 0) {
          questionsFiltered.value = await questionService.getQuestions()
        } else {
          questionsFiltered.value = await questionService.getQuestionsByAnimalType(typeId)
          console.log('Preguntas cargadas:', questionsFiltered.value)

        }
      } catch (error) {
        console.log('No se han podido obtenern las preguntas', error)
      } finally {
        isLoading.value = false
      }
    }

    // se obtienen las preguntas al montar el componente
    onMounted(async () => {
      // obtenenr tipos de animales para el select
      try {
        animalTypes.value = await animalTypesService.getaAnimalTypes()
      } catch (error) {
        console.log('No se han podido obtenenr los tipos de animales', error)
      }
      await loadQuestions(route.params.id)
    })

    // se utiliza la funcion watch para modificar el parametro del route cuando cambie
    watch(() => route.params.id, async (newId) => {
      selectedType.value = newId
      // se ejecuta la funcion con el id modificado
      await loadQuestions(newId)
    })

    // // funcion que se ejecuta al hacer submit que redirige a este mismo view
    function submitFilter() {
      router.push({ name: 'questionListView', params: { id: selectedType.value || '0' } })
    }

    return {
      selectedType,
      questionsFiltered,
      animalTypes,
      submitFilter,
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

.message {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 60%;
  padding: 2em;
  color: #b00020;
  background-color: #f8e8e8;
  border: 2px solid #f5c2c7;
  border-radius: 0.3em;
  font-size: 1.4em;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
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
