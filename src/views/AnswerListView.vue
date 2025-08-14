<template>
    <main>
        <div class="mainContainer">
            <div class="contentContainer">
                <SideBar />
            </div>

            <div :class="['container', { 'with-user': isLoggedIn }]" v-if="dataQuestion">
                <div v-if="isLoading" class="loadingText">Cargando respuestas...</div>
                <h1 v-if="!isLoading && dataQuestion">Pregunta</h1>
                <QuestionCard v-if="!isLoading && dataQuestion" :question="dataQuestion" :is-detail="true" />
                <h2 v-if="!isLoading && dataQuestion">Respuestas</h2>
                <AnswerCard v-for="answer in answersFiltered" :answer="answer" />
            </div>
        </div>
        <AnswerForm v-if="isLoggedIn && !isLoading && answersFiltered.length !== 0" />
        <ErrorMessage v-if="!isLoading && answersFiltered.length === 0"
            text="No hay respuestas sobre este animal todavía" />
    </main>
</template>


<script>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { userStore } from '@/stores/userStore'
import answerService from '@/services/answerService'
import questionService from '@/services/questionService'
import QuestionCard from '@/components/QuestionCard.vue'
import AnswerCard from '@/components/AnswerCard.vue'
import AnswerForm from '@/components/AnswerForm.vue'
import SideBar from '../components/SideBar.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

export default {
    components: {
        ErrorMessage,
        QuestionCard,
        AnswerCard,
        AnswerForm,
        SideBar
    },
    setup() {
        // objetos
        const route = useRoute()
        const auth = userStore()
        // reactivos
        const isLoggedIn = computed(() => auth.isAuthenticated)
        const isLoading = ref(true)
        const answersFiltered = ref([])
        const dataQuestion = ref([])
        const selectedQuestion = ref(route.params.id || 0)

        // funcion para obtenern las respuestas correspondintes
        const loadAnswers = async (id) => {
            try {
                answersFiltered.value = await answerService.getAnswersByQuestionId(id)
            } catch (error) {
                console.log('No se han podido obtenern las respuestas', error)
            }
        }

        // funcion para obtner la pregunta seleccionada y mostarla
        const loadQuestion = async (id) => {
            try {
                dataQuestion.value = await questionService.getQuestionById(id)
                console.log('pregunta', dataQuestion)
            } catch (error) {
                console.log('No se ha podido obtener LA PREGUNTA', error)
            }
        }

        // se monta el componente
        onMounted(async () => {
            isLoading.value = true
            await Promise.all([
                loadAnswers(selectedQuestion.value),
                loadQuestion(selectedQuestion.value)
            ])
            isLoading.value = false
        })


        // se utiliza la funcion watch para modificar el parametro del route cuando cambie
        watch(() => route.params.id, async (newId) => {
            selectedQuestion.value = newId
            // se ejecuta la funcion con el id modificado
            await loadAnswers(newId)
            await loadQuestion(newId)
        })

        return {
            isLoggedIn,
            dataQuestion,
            answersFiltered,
            isLoading
        }
    }
}
</script>

<style scoped>
.container {
    display: block;
    padding: 2em;
    margin-left: 15%;
    gap: 2em;
    width: 85%;
    box-sizing: border-box;
}

.container.with-user {
    min-height: 100vh;
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

h2 {
    margin: 1em;
    color: #113301;
}

h1 {
    margin-bottom: 1em;
    color: #113301;
}

@media (max-width: 1366px) {
    h2 {
        font-size: 1.2em;
    }

    h1 {
        font-size: 1.4em;
    }

    .container {
        padding-top: 1em;

    }
}
</style>
