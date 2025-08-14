<template>
    <div class="answer-form">
        <input type="text" class="answer-input" placeholder="Escribe tu respuesta aquí..." />
        <button class="send-btn">Enviar</button>
        <label class="attach-icon">
            <img src="/formImg/clip.png" alt="">
            <input type="file" class="file-input" />
        </label>
    </div>
</template>

<script>
export default {
    name: 'AnswerForm'
}
</script>

<style scoped>
.answer-form {
    display: flex;
    align-items: center;
    gap: 1em;
    margin-left: 15%;
    padding: 1em 1.25em;
    background-color: #fefefe;
    border-top: 0.125em solid #e0e0e0;
    box-shadow: 0 -0.125em 0.25em rgba(0, 0, 0, 0.05);
    position: sticky;
    bottom: 0;
    z-index: 999;
}

.answer-input {
    flex: 1;
    padding: 0.625em 0.875em;
    border: 0.125em solid #dcdcdc;
    border-radius: 0.5em;
    font-size: 1em;
    transition: border 0.2s;
}

.answer-input:focus {
    border-color: #4caf50;
    outline: none;
}

.send-btn {
    background-color: #134a15;
    color: white;
    border: none;
    padding: 0.625em 1em;
    border-radius: 0.5em;
    cursor: pointer;
    font-weight: bold;
    font-size: 1em;
    transition: background 0.3s;
}

.send-btn:hover {
    background-color: #3e9140;
}

.attach-icon {
    font-size: 1.4em;
    cursor: pointer;
    position: relative;
    color: #555;
}

.attach-icon img {
    height: 1.3em;
}

.file-input {
    display: none;
}

@media (max-width: 1366px) {
    .answer-form {
        padding: 0.5em 1.05em;
    }
    .answer-input,
    .send-btn {
        padding: 0.4em 0.875em;
        border-radius: 0.3em;
        font-size: 0.9em;
    }
    .attach-icon img {
        height: 1em;
    }
}
</style>
