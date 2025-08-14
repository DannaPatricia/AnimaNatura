<script>
import { userStore } from '@/stores/userStore'
import { ref, onMounted } from 'vue'

export default {
    props: {
        animal: {
            type: Object,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: true
        }
    },
    setup(props) {
        const auth = userStore()
        const userRole = auth.role
        const isVerify = ref(false)
        const isAdmin = ref(false)

        onMounted(() => {
            if (userRole === 'veterinario' || userRole === 'etologo' || userRole == 'Especialista') {
                isVerify.value = true
            } else if (userRole === 'admin') {
                isAdmin.value = true
            }
        })

        return {
            isFavorite: props.isFavorite,
            userRole,
            isVerify,
            isAdmin
        }
    }
}
</script>

<template>
    <RouterLink :to="{ name: 'animalProfile', params: { id: animal.id } }" class="animal-card">
        <img :src="animal.imageUrl" :alt="animal.name" class="animal-image" />
        <div class="animal-info">
            <h2 class="animal-name">{{ animal.name }}</h2>
            <p class="scientific-name"><em>{{ animal.scientificName }}</em></p>
            <p class="animal-type">{{ animal.animalType }}</p>
        </div>
        <div class="action-buttons" v-if="isVerify || isAdmin">
            <button class="delete-btn" title="Eliminar cuenta" v-if="isAdmin"><img src="/formImg/delete.png"
                    alt=""></button>
            <button class="edit-btn" title="Editar usuario"><img src="/formImg/edit.png" alt=""></button>
        </div>
        <div class="action-buttons" v-if="userRole === 'cliente' && !isFavorite">
            <button class="favorite-btn" title="Favoritos"><img src="/formImg/heart.png" alt=""></button>
        </div>
        <div class="action-buttons" v-if="userRole === 'cliente' && isFavorite">
            <button class="favorite-btn" title="Favoritos"><img src="/formImg/fullHeart.png" alt=""></button>
        </div>
    </RouterLink>
</template>

<style scoped>
a {
    text-decoration: none;
}

.animal-card {
    display: flex;
    align-items: center;
    background-color: #f6f5f0;
    border: 1px solid #ddd;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    /* animación de entrada */
    opacity: 0;
    transform: translateY(20px) scale(1);
    animation: fadeInUp 0.6s ease forwards;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.animal-card:hover {
    transform: scale(1.5);
    box-shadow: 0 6px 14px rgba(0, 60, 120, 0.2);
}

.animal-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 12px;
    margin-right: 16px;
}

.animal-info {
    display: flex;
    width: 60%;
    flex-direction: column;
}

.animal-name {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    color: #2d3e1f;
}

.scientific-name {
    font-size: 16px;
    color: #4d4d4d;
    margin: 0.5em 0;
}

.animal-type {
    background-color: #d2e3c8;
    color: #2d3e1f;
    font-size: 14px;
    padding: 4px 8px;
    border-radius: 8px;
    width: fit-content;
}

.action-buttons {
    display: flex;
    justify-content: flex-end;
    margin: 0 -0 auto 5em;
}

.action-buttons button {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 0.5em;
    transition: transform 0.2s ease;
    padding: 0.3em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
}

.action-buttons button:hover {
    transform: scale(1.1);
    background-color: #eeeeee;
}

.action-buttons img {
    height: 20px;
    width: 20px;
    object-fit: contain;
}

@media (max-width: 1366px) {
    .animal-name {
        font-size: 1.1em;
    }

    .action-buttons {
        display: flex;
        justify-content: flex-end;
        margin: 0 -0 auto 2em;
    }
}
</style>
