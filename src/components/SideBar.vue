<script setup>
import Select from '../components/Select.vue'

</script>
<template>
    <div class="mainContainer">
        <div class="contentContainer">
            <div class="list">
                <RouterLink to="/profile-List-View">Ver fichas de animales</RouterLink>
                <RouterLink :to="{ name: 'questionListView', params: { id: 0 } }">Ver preguntas y respuestas
                </RouterLink>
                <Select></Select>
            </div>
        </div>

    </div>

</template>
<style scoped>
.mainContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.contentContainer {
    position: fixed;
    top: 5em;
    left: 0;
    /* ajusta segun el header */
    height: calc(100vh - 5em);
    width: 15%;
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 1em;
    background-color: rgb(13, 28, 2);
    box-shadow: 4px 0 8px rgba(0, 0, 0, 0.3);
    border-left: 6px solid #358211;
    overflow-y: auto;
    z-index: 1000;
}

.list {
    display: flex;
    flex-direction: column;
    margin: 2em auto;
    gap: 2em;
}

.list a {
    position: relative;
    font-size: 1.4em;
    color: white;
    text-decoration: none;
    padding-bottom: 0.2em;
    transition: color 0.3s ease;
}

.list a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: white;
    transition: width 0.4s ease-in-out;
}

.list a:hover::after {
    width: 100%;
}

@media (max-width: 1366px) {
    .list a {
        position: relative;
        font-size: 1em;
        color: white;
        text-decoration: none;
        padding-bottom: 0.2em;
        transition: color 0.3s ease;
    }

    .contentContainer {
        top: 4.5em;
        /* ajusta segun el header */
        height: calc(100vh - 4.5em);
    }
}
</style>