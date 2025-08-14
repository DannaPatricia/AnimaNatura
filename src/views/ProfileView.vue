<script>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import speciesService from '@/services/speciesService'
import SideBar from '@/components/SideBar.vue'

export default {
    components: {
        SideBar
    },
    setup() {
        const route = useRoute()
        const animalId = ref(route.params.id || 0)
        const animal = ref({})
        const isLoading = ref(true)
        const error = ref(null)

        const hasAnimalData = computed(() => animal.value && animal.value.id)
        const isExotic = computed(() => animal.value?.is_exotic)

        const loadAnimal = async (id) => {
            if (!id) return

            isLoading.value = true
            error.value = null

            try {
                const response = await speciesService.getSpecieById(id)
                animal.value = response || {}
            } catch (err) {
                console.error('Error al cargar el animal:', err)
                error.value = 'No se pudo cargar la información del animal'
                animal.value = {}
            } finally {
                isLoading.value = false
            }
        }

        onMounted(() => {
            loadAnimal(route.params.id)
        })

        watch(() => route.params.id, (newId) => {
            animalId.value = newId
            loadAnimal(newId)
        })

        return {
            animal,
            isLoading,
            error,
            hasAnimalData,
            isExotic
        }
    }
}
</script>

<template>
    <main>
        <div class="main-container">
            <div class="content-container">
                <SideBar />
            </div>

            <!-- Loading  -->
            <div v-if="isLoading" class="loading-container">
                <div class="loading-text">Cargando animal...</div>
            </div>

            <!-- Error  -->
            <div v-else-if="error" class="error-container">
                <p class="error-text">{{ error }}</p>
            </div>

            <!-- Animal Profile -->
            <div v-else-if="hasAnimalData" class="animal-profile fade-in">
                <div class="animal-toc-container">
                    <div class="data-container">
                        <div class="animal-main-data">
                            <h1 class="animal-name">{{ animal.name?.toUpperCase() }}</h1>
                            <p class="scientific-name">
                                <em>{{ animal.scientificName }}</em>
                            </p>
                            <img :src="animal.imageUrl" :alt="animal.name" class="animal-image" loading="lazy" />
                        </div>
                    </div>

                    <!-- indidce de secciones -->
                    <nav class="toc">
                        <h2>Índice</h2>
                        <ul>
                            <li><a href="#descripcion">Descripción</a></li>
                            <li><a href="#adopcion">¿Qué esperar?</a></li>
                            <li><a href="#cuidados">Cuidados</a></li>
                            <li><a href="#habitat">Hábitat</a></li>
                            <li><a href="#dieta">Dieta</a></li>
                            <li><a href="#mitos">Mitos</a></li>
                            <li><a href="#legalidad">Legalidad</a></li>
                            <li><a href="#consejos">Consejos</a></li>
                        </ul>
                    </nav>
                    <!-- div esotico  -->
                    <div v-if="isExotic" class="exotic-badge">
                        Exótico
                    </div>
                </div>
                <!-- Secciones de info -->
                <section v-if="animal.description" class="section-block" id="descripcion">
                    <h2>Descripción</h2>
                    <p>{{ animal.description }}</p>
                </section>

                <section v-if="animal.content" class="section-block" id="adopcion">
                    <h2>¿Qué esperar al adoptar una?</h2>
                    <p>{{ animal.content }}</p>
                </section>

                <!-- Cuidados por etapas -->
                <section class="section-block" id="cuidados">
                    <h2>Cuidados por etapa</h2>

                    <div v-if="animal.care_baby" class="stage">
                        <h3>Cría</h3>
                        <p>{{ animal.care_baby }}</p>
                        <img :src="animal.imageUrl" class="care-image" alt="Cuidados para cría" loading="lazy" />
                    </div>

                    <div v-if="animal.care_junior" class="stage">
                        <h3>Juvenil</h3>
                        <p>{{ animal.care_junior }}</p>
                        <img :src="animal.imageUrl" class="care-image" alt="Cuidados para juvenil" loading="lazy" />
                    </div>

                    <div v-if="animal.care_senior" class="stage">
                        <h3>Adulta</h3>
                        <p>{{ animal.care_senior }}</p>
                        <img :src="animal.imageUrl" class="care-image" alt="Cuidados para adulto" loading="lazy" />
                    </div>
                </section>

                <!-- habitad por etapas -->
                <section class="section-block" id="habitat">
                    <h2>Hábitat recomendado</h2>

                    <div v-if="animal.habitat_baby" class="stage">
                        <h3>Cría</h3>
                        <p>{{ animal.habitat_baby }}</p>
                    </div>

                    <div v-if="animal.habitat_junior" class="stage">
                        <h3>Juvenil</h3>
                        <p>{{ animal.habitat_junior }}</p>
                    </div>

                    <div v-if="animal.habitat_senior" class="stage">
                        <h3>Adulta</h3>
                        <p>{{ animal.habitat_senior }}</p>
                    </div>
                </section>

                <!-- alimentacion -->
                <section class="section-block" id="dieta">
                    <h2>Dieta</h2>

                    <div v-if="animal.diet_baby" class="stage">
                        <h3>Cría</h3>
                        <p>{{ animal.diet_baby }}</p>
                    </div>

                    <div v-if="animal.diet_junior" class="stage">
                        <h3>Juvenil</h3>
                        <p>{{ animal.diet_junior }}</p>
                    </div>

                    <div v-if="animal.diet_senior" class="stage">
                        <h3>Adulta</h3>
                        <p>{{ animal.diet_senior }}</p>
                    </div>
                </section>

                <!-- Mitos comunes -->
                <section v-if="animal.myths" class="section-block" id="mitos">
                    <h2>Mitos comunes</h2>
                    <p>{{ animal.myths }}</p>
                </section>

                <!-- Notas legales -->
                <section v-if="animal.legal_notes" class="section-block" id="legalidad">
                    <h2>Legalidad</h2>
                    <p>{{ animal.legal_notes }}</p>
                </section>

                <!-- Consejos -->
                <section v-if="animal.advices_good || animal.advices_bad" class="section-block" id="consejos">
                    <div v-if="animal.advices_good?.length" class="advice-section">
                        <h2>Consejos útiles</h2>
                        <ul class="advice-list good-advice">
                            <li v-for="(advice, index) in animal.advices_good" :key="`good-${index}`">
                                {{ advice }}
                            </li>
                        </ul>
                    </div>

                    <div v-if="animal.advices_bad?.length" class="advice-section">
                        <h2>Advertencias</h2>
                        <ul class="advice-list bad-advice">
                            <li v-for="(bad, index) in animal.advices_bad" :key="`bad-${index}`">
                                {{ bad }}
                            </li>
                        </ul>
                    </div>
                </section>
                <!-- boiton de descarga -->
                <div class="download-button-container">
                    <button class="download-button">
                        Descargar contenido educativo
                    </button>
                </div>

            </div>
        </div>
    </main>
</template>

<style scoped>

.toc{
    margin-left: 2em;
    width: 50%;
}

.animal-toc-container{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.main-container {
    margin: 1em auto;
    padding: 1em 2em;
    max-width: 1400px;
}

/* Badge Exótico */
.exotic-badge {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #43a047;
    color: white;
    font-weight: bold;
    padding: 8px 18px;
    border-radius: 16px 0 0 16px;
    font-size: 0.95em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
    z-index: 5;
    transition: transform 0.3s ease;
}

.exotic-badge:hover {
    transform: scale(1.05);
}

/* Secciones */
.section-block {
    scroll-margin-top: 5.3em;
    background-color: #ffffff;
    margin-bottom: 3em;
    padding: 2em;
    border-radius: 16px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.3s ease;
}

.section-block:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.loading-container,
.error-container {
    display: flex;
    justify-content: center;
    margin-left: 15%;
    align-items: center;
    min-height: 50vh;
}

.loading-text {
    font-size: 1.6em;
    font-weight: bold;
    color: #4a7543;
    animation: pulse 1.2s ease-in-out infinite;
}

.error-text {
    color: #d32f2f;
    font-size: 1.2em;
    text-align: center;
    padding: 2rem;
    background-color: #ffebee;
    border-radius: 16px;
    border: 1px solid #ffcdd2;
}

/* Contenedor del perfil del animal */
.animal-profile {
    margin: 2em 3em 2em 18%;
    max-width: 1200px;
}

.animal-container {
    position: relative;
    display: flex;
    width: 100%;
    margin-bottom: 2em;
}

.animal-main-data {
    flex: 1;
}



/* Información del animal */
.animal-name {
    font-size: 2.5em;
    color: #2d3e1f;
    margin-bottom: 0.2em;
    line-height: 1.2;
}

.scientific-name {
    color: #4d4d4d;
    font-size: 1.3em;
    margin-bottom: 1em;
}

.animal-image {
    width: 100%;
    max-width: 400px;
    border-radius: 16px;
    margin-bottom: 1.5em;
    transition: transform 0.3s ease;
}

.animal-image:hover {
    transform: scale(1.02);
}



.section-block h2 {
    color: #325c2c;
    margin-bottom: 1em;
    border-bottom: 2px solid #b4c89c;
    padding-bottom: 0.5em;
    font-size: 1.5em;
}

.section-block p {
    font-size: 1.1em;
    line-height: 1.7em;
}


/* Etapas */
.stage {
    margin-bottom: 2em;
    padding: 1em 0;
}

.stage:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
}

.stage h3 {
    font-size: 1.3em;
    color: #3f684c;
    margin-bottom: 0.5em;
    display: inline-flex;
    align-items: center;
}


.stage p {
    font-size: 1.1em;
    line-height: 1.7em;
    margin-bottom: 1em;
    color: #333;
}

.care-image {
    width: 100%;
    max-width: 320px;
    margin-top: 1em;
    border-radius: 12px;
    border: 2px solid #c8dbc4;
    transition: transform 0.3s ease;
}

.care-image:hover {
    transform: scale(1.03);
}

/* Consejos */
.advice-section {
    margin-bottom: 2em;
}

.advice-list {
    list-style: none;
    padding-left: 0;
    margin-top: 1em;
}

.advice-list li {
    margin-bottom: 0.8em;
    padding: 0.8em 1em;
    border-radius: 8px;
    font-size: 1em;
    position: relative;
    padding-left: 2.5em;
}

.good-advice li {
    background-color: #e8f5e8;
    border-left: 4px solid #4caf50;
}

.good-advice li:before {
    content: "✓";
    position: absolute;
    left: 1em;
    color: #4caf50;
    font-weight: bold;
}

.bad-advice li {
    background-color: #fff3e0;
    border-left: 4px solid #ff9800;
}

.bad-advice li:before {
    content: "⚠";
    position: absolute;
    left: 1em;
    color: #ff9800;
}

.download-button-container {
    text-align: center;
    margin-top: 3em;
}

.download-button {
    background-color: #32800e;
    color: white;
    font-size: 1.1em;
    font-weight: bold;
    padding: 12px 24px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.download-button:hover {
    background-color: #2a6c0c;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
}

.toc {
    background-color: #f7fdf7;
    border: 2px solid #cfe9ce;
    padding: 1.5em 2em;
    border-radius: 16px;
    margin-bottom: 3em;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.toc h2 {
    color: #2d5027;
    margin-bottom: 1em;
    font-size: 1.4em;
    border-bottom: 2px solid #b4c89c;
    padding-bottom: 0.4em;
}

.toc ul {
    list-style: none;
    padding: 0;
}

.toc li {
    margin-bottom: 0.8em;
}

.toc a {
    color: #327d20;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease;
}

.toc a:hover {
    color: #1c5e10;
    text-decoration: underline;
}

/* Animaciones */
@keyframes pulse {

    0%,
    100% {
        opacity: 0.4;
    }

    50% {
        opacity: 1;
    }
}

/* Responsive */
@media (max-width: 1366px) {
    .animal-name {
        font-size: 2em;
    }

    .animal-profile {
        margin: 0 2em 2em 19%;
    }

    .section-block p {
        font-size: 1em;
        line-height: 1.7em;
    }

}

.fade-in {
    animation: fadeIn 0.8s ease-in-out both;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(16px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .animal-profile {
        margin: 1em;
    }

    .animal-name {
        font-size: 1.8em;
    }

    .section-block {
        padding: 1.5em;
    }

    .exotic-badge {
        position: static;
        margin-bottom: 1em;
        display: inline-block;
    }

    .animal-container {
        flex-direction: column;
    }
}
</style>