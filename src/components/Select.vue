<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import animalTypesService from '@/services/animalTypesService'

export default {
  setup() {
    const typeSelected = ref('')
    const router = useRouter()
    const animalType = ref([])

    onMounted(async () => {
      try {
        animalType.value = await animalTypesService.getaAnimalTypes()
      } catch (error) {
        console.log('No se han podido obtenenr los tipos de animales', error)
      }
    })

    // evento al enviar el formulario
    const submitForm = async () => {
      // se hace un redirecionamiento hacia la vista de la lista de animales filtrados, el id se pasara por parametro
      router.push({ name: "ProfileListFiltered", params: { id: typeSelected.value } })
    }

    return {
      typeSelected,
      animalType,
      submitForm
    }
  }
}

</script>

<template>
  <form class="selectContainer" @submit.prevent="submitForm()">
    <label for="animalType">Filtrar fichas por tipo de animal</label>
    <select v-model="typeSelected" id="animalType">
      <option disabled value="">Tipo de animal</option>
      <option v-for="type in animalType" :key="type.id" :value="type.id">
        {{ type.name }}
      </option>
    </select>
    <button type="submit">Buscar</button>
  </form>
</template>

<style scoped>

.selectContainer label {
  font-size: 1em;
  color: white;
  display: block;
  margin-bottom: 0.3em;
}

.selectContainer select {
  width: 100%;
  padding: 0.6em;
  font-size: 1em;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: rgb(5, 12, 3);
  color: white;
  transition: border-color 0.3s ease;
}

.selectContainer select:focus {
  border: 2px solid #213320;
  outline: none;
}

.selectContainer button {
  margin-top: 1em;
  padding: 0.6em 1.2em;
  font-size: 1em;
  background-color: #42873d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.selectContainer button:hover {
  background-color: #346a2f;
}

.selectContainer button:active {
  transform: scale(0.97);
}

@media (max-width: 1366px) {
  .selectContainer label {
    margin-bottom: 0.5em;
  }

  .selectContainer select {
    font-size: 0.7em;
  }

  .selectContainer button {
    margin-top: 1em;
    padding: 0.4em 1em;
    font-size: 0.9em;
  }
}
</style>
