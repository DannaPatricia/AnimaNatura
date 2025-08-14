<template>
  <main>
    <div class="mainContainer">
      <div class="contentContainer">
        <SideBar></SideBar>
      </div>
      <div class="animalsContainer">
        <!-- mientras este cargando se muesta el mensaje -->
        <div v-if="isLoading" class="loadingText">Cargando animales...</div>
        <AnimalCard v-else v-for="animal in animals" :key="animal.id" :animal="animal"  :isFavorite="false"/>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'
import speciesService from '@/services/speciesService'
import AnimalCard from '@/components/AnimalCard.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  // se declaran componentes
  components: {
    AnimalCard,
    SideBar
  },
  setup() {
    // valores reactivos
    const animals = ref([])
    const isLoading = ref(true)

    // se simula la llamda a la api y se modifica el valor de la lista de animales
    onMounted(async () => {
      try {
        animals.value = await speciesService.getSpecies()
      } catch (error) {
        console.error('No se han podido obtener los animales', error)
      } finally {
        isLoading.value = false
      }
    })

    // se retornan los valores a usar
    return {
      animals,
      isLoading
    }
  }
}
</script>


<style scoped>
.animalsContainer {
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
  margin: 3em 0 0 15%;
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