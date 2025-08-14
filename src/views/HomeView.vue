<script setup>
import { ref, onMounted } from 'vue'
import { userStore } from '@/stores/userStore'
import Select from '../components/Select.vue'

// se hace uso del store de pinia para verificar el usuario
const auth = userStore()
console.log(auth.user, auth.role)

// resultado de la llamada a la API
const partnersImgList = ["/AnimaNatura/partners/c1.png", "/AnimaNatura/partners/c2.png", "/AnimaNatura/partners/c3.png", "/AnimaNatura/partners/c4.png", "/AnimaNatura/partners/c5.png",]

// control de transición de entrada
const showMainContent = ref(false)

onMounted(() => {
    setTimeout(() => {
        showMainContent.value = true
    }, 100)
})
</script>

<template>
    <main>
            <div :class="['mainContainer', { 'visible': showMainContent }]">
                <div class="contentContainer">
                    <RouterLink to="/profile-List-View">Ver fichas de animales</RouterLink>
                    <RouterLink :to="{ name: 'questionListView', params: { id: 0 } }">Ver preguntas y respuestas
                    </RouterLink>
                    <Select></Select>
                </div>
                <div class="imgContainer">
                    <img src="/fondoGimp.png" alt="fondo" />
                </div>
            </div>

            <div :class="['partnersContainer', { 'visible': showMainContent }]">
                <h1>COLABORADORES</h1>
                <div class="partnersContent">
                    <p>Nuestro proyecto no sería posible sin el compromiso y la experiencia de quienes comparten nuestra
                        visión.
                        Veterinarios, etólogos y asociaciones se unen a AnimaNatura para construir una plataforma
                        educativa
                        y
                        responsable.</p>
                    <div class="partnersImg">
                        <img v-for="img in partnersImgList" :src="img" alt="logoPartner" />
                    </div>
                </div>
            </div>
    </main>
</template>

<style scoped>
.mainContainer {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: rgb(5, 12, 3);
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.mainContainer.visible {
    opacity: 1;
    transform: translateY(0);
}

.contentContainer {
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin: auto 0.2em;
    padding: 1em;
    background-color: rgba(5, 12, 3, 0.901);
    border-left: 6px solid #42873d;
}

.contentContainer a {
    position: relative;
    font-size: 1.5em;
    color: white;
    text-decoration: none;
    padding-bottom: 0.2em;
    transition: color 0.3s ease;
}

.contentContainer a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: white;
    transition: width 0.4s ease-in-out;
}

.contentContainer a:hover::after {
    width: 100%;
}

.imgContainer {
    display: flex;
    justify-content: flex-end;
    min-width: 85%;
    height: 100%;
    width: 85%;
}

.imgContainer img {
    width: 100%;
    object-fit: cover;
}

.partnersContainer {
    display: flex;
    flex-direction: column;
    margin: 2em auto;
    height: 35em;
    width: 80%;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.partnersContainer.visible {
    opacity: 1;
    transform: translateY(0);
}


.partnersContainer h1 {
    text-align: center;
    color: #213b1e;
}

.partnersContent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
    margin-top: 2em;
    width: 100%;
    padding: 2em;
}

.partnersContent p {
    font-size: 1.5em;
    line-height: 1.7em;
}

.partnersImg {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;
}

.partnersImg img {
    width: 10em;
    transition: transform 0.3s ease-in-out;
}

.partnersImg img:hover {
    transform: scale(1.1);
}

@media (max-width: 1366px) {
    .contentContainer a {
        font-size: 1em;
        padding-bottom: 0.2em;
    }

    .partnersContent {
        margin-top: 1em;
        padding: 2em;
    }

    .partnersContainer h1 {
        margin-top: 1em;
    }

    .partnersContent p {
        font-size: 1.3em;
        line-height: 1.7em;
    }

    .partnersImg img {
        width: 8em;
    }
}

</style>
