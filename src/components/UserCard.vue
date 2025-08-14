<template>
    
    <div class="user-card">
        <div class="card-header">
            <h3>{{ user.username }}</h3>
            <div class="action-buttons">
                <button class="edit-btn" title="Editar usuario"><img src="/formImg/edit.png" alt=""></button>
                <button class="delete-btn" title="Eliminar cuenta"><img src="/formImg/delete.png" alt=""></button>
            </div>
        </div>

        <div class="card-body">
            <label for="role">Rol:</label>
            <select v-model="selectedRole" class="role-select">
                <option value="cliente">Cliente</option>
                <option value="veterinario">Veterinario</option>
                <option value="etologo">Etólogo</option>
                <option value="especialista">Especialista</option>
                <option value="admin">Administrador</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: Object,
        require: true
    },
    data() {
        return {
            selectedRole: this.user.role
        }
    }
}
</script>

<style scoped>
.user-card {
    background-color: #fefefe;
    border-left: 6px solid #60af5b;
    border-radius: 12px;
    padding: 1.5em;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    color: #1c1c1c;
    transition: transform 0.2s ease;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.user-card:hover {
    transform: translateY(-2px);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-header h3 {
    font-size: 1.3em;
    margin: 0;
    color: #263a28;
}

.action-buttons {
    display: flex;
    align-items: center;
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


.card-body {
    margin-top: 1em;
    display: flex;
    align-items: center;
    gap: 1em;
}

.card-body label {
    font-weight: 600;
    color: #333;
}

.role-select {
    padding: 0.5em 1em;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f4f4f4;
    color: #333;
}

.role-select:focus {
    border-color: #60af5b;
    outline: none;
}

@media (max-width: 1366px) {
    .card-header h3 {
        font-size: 1.1em;
    }

    .role-select {
        font-size: 0.8em;
    }

    .card-body label {
        font-size: 0.9em;
    }
}
</style>
