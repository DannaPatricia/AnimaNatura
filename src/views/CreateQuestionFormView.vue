<template>
  <main>
    <div class="form-container">
      <form class="question-form">
        <h1>Haz una nueva pregunta</h1>
        <p class="subtitle">Consulta tus dudas y obtén ayuda de profesionales y amantes de los animales</p>

        <label for="title">Título</label>
        <input type="text" id="title" placeholder="¿Qué tipo de sustrato es mejor para un geco leopardo?" />

        <label for="content">Contenido</label>
        <textarea id="content" rows="5" placeholder="Describe tu situación con más detalle..."></textarea>

        <label for="imageUrl">URL de imagen (opcional)</label>
        <input type="text" id="imageUrl" placeholder="https://ejemplo.com/mi-imagen.jpg" />

        <label for="type">Tipo de pregunta</label>
        <select id="type">
          <option disabled value="">Selecciona un tipo</option>
          <option value="alimentación">Alimentación</option>
          <option value="cuidados">Cuidados</option>
          <option value="otros">Otros</option>
        </select>

        <label for="animalType">Tipo de animal</label>
        <select v-model="selectedAnimalType" id="animalType">
          <option disabled value="">Tipo de animal</option>
          <option v-for="type in animalTypes" :key="type.id" :value="type.id">
            {{ type.name }}
          </option>
        </select>

        <label for="specie">Especie</label>
        <select id="specie">
          <option disabled value="">Selecciona una especie</option>
          <option>-- Aquí irán las especies según el animal seleccionado --</option>
        </select>

        <button type="submit">Publicar pregunta</button>
      </form>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'
import animalTypesService from '@/services/animalTypesService'

export default {
  setup() {
    const animalTypes = ref([])
    const selectedAnimalType = ref('')

    onMounted(async () => {
      try {
        animalTypes.value = await animalTypesService.getaAnimalTypes()
      } catch (error) {
        console.error('Error al cargar los tipos de animales', error)
      }
    })

    return {
      animalTypes,
      selectedAnimalType
    }
  }
}
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  margin: 2em;
  padding: 1em;
}

.question-form {
  background-color: #263a28;
  padding: 2.5em;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  color: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.8s ease;
}

.question-form h1 {
  text-align: center;
  margin-bottom: 0.5em;
  font-size: 2em;
}

.subtitle {
  text-align: center;
  font-size: 1em;
  color: #cccccc;
  margin-bottom: 2em;
}

.question-form label {
  display: block;
  margin-top: 1.2em;
  font-weight: 600;
  font-size: 1em;
}

.question-form input,
.question-form textarea,
.question-form select {
  width: 100%;
  padding: 1em;
  margin-top: 0.4em;
  border: none;
  border-radius: 8px;
  background-color: #f4f4f4;
  font-size: 1em;
  color: #333;
  transition: box-shadow 0.3s ease;
}

.question-form input:focus,
.question-form textarea:focus,
.question-form select:focus {
  box-shadow: 0 0 5px #a3e57e;
  outline: none;
}

.question-form button {
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

.question-form button:hover {
  background-color: #4e994c;
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

</style>
