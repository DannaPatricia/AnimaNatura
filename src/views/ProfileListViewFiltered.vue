<template>
    <main>
        <div class="mainContainer">
            <div class="contentContainer">
                <SideBar />
            </div>

            <div class="animalsContainer">
                <!-- mientras este cargando se muesta el mensaje -->
                <div v-if="isLoading" class="loadingText">Cargando animales...</div>
                <template v-else-if="animalsFiltered.length > 0">
                    <AnimalCard v-for="animal in animalsFiltered" :key="animal.id" :animal="animal" :isFavorite="true"/>
                </template>
                <ErrorMessage v-else text="No hay animales favoritos todavía"></ErrorMessage>
            </div>
        </div>
    </main>
</template>


<script>
import AnimalCard from '@/components/AnimalCard.vue'
import SideBar from '../components/SideBar.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import favoritesService from '@/services/favoritesService'
import speciesService from '@/services/speciesService'
import { userStore } from '@/stores/userStore'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, watch } from 'vue'

export default {
    components: {
        ErrorMessage,
        AnimalCard,
        SideBar
    },
    setup() {
        // se declaran reactivos
        const animalsFiltered = ref([])
        const isFavorite = ref(false)
        const isLoading = ref(true)
        // se declaran objetso
        const route = useRoute()
        const router = useRouter()

        // Funcion asincorna que toma como parametro el id del route params
        const loadAnimals = async (id) => {
            isLoading.value = true
            try {
                const typeId = Number(id)
                if (typeId === 0) {
                    isFavorite.value = true
                    // se verifica la asesion del usuario y si n oesta iniciado sesion redirige el login
                    const auth = userStore()
                    if (!auth.isAuthenticated) {
                        router.push('/login')
                        return
                    }
                    // en caso de estar regitrado obtienen un listado de los animaoes favoritos del usuario
                    animalsFiltered.value = await favoritesService.getFavoriteByUserId(auth.id)
                } else {
                    // caso contrario obtiene u nlistado filtrado por el id del tipo de anial
                    isFavorite.value = false
                    animalsFiltered.value = await speciesService.getSpeciesByAnimalTypeId(typeId)
                }
            } catch (error) {
                console.log('Error al obtener la lista de animales', error)
            } finally {
                isLoading.value = false
            }
        }

        // se obtienen los animales al montar el componente
        onMounted(async () => {
            await loadAnimals(route.params.id)
        })

        // se utiliza la funcion watch para modificar el parametro del route cuando cambie
        watch(() => route.params.id, async (newId) => {
            // se ejecuta la funcion con el id modificado
            await loadAnimals(newId)
        })

        return {
            isFavorite,
            animalsFiltered,
            isLoading
        }
    }
}

</script>
<style scoped>
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

.animalsContainer {
    margin-left: 15%;
    padding: 2em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
    width: 85%;
    box-sizing: border-box;
}
</style>