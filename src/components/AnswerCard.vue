<template>
  <div class="answer-card" :class="{ verifiedCard: answer.userRole !== 'cliente' }" v-if="answer">
    <img v-if="answer.image_url" :src="answer.image_url" alt="Imagen de respuesta" class="answer-image" />

    <div class="answer-info">
      <div class="answer-header">
        <div class="user-data">
          <span>{{ answer.userName }}</span>
          <span class="user-role">{{ answer.userRole }}</span>
        </div>
        <span class="created-at">{{ answer.created_at }}</span>
      </div>

      <h3 class="answer-title">{{ answer.title }}</h3>
      <p class="answer-content">{{ answer.content }}</p>

      <div v-if="answer.userRole !== 'cliente'" class="verificado">
        ✔ Verificado por un profesional
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    answer: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.answer-card {
  display: flex;
  margin: auto;
  width: 95%;
  align-items: flex-start;
  background-color: #f5fdf1;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  animation: fadeIn 0.4s ease-in forwards;
  transform: translateY(10px);
  opacity: 0;
}

@keyframes fadeIn {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.answer-image {
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 20px;
}

.answer-info {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

.answer-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  margin-bottom: 1em;
  font-weight: 500;
  color: #4f7a2c;
}

.user-data {
  display: flex;
  align-items: center;
  gap: 0.8em;
}

.user-role {
  text-transform: capitalize;
  background-color: #d4f5cb;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.9em;
}

.verifiedCard .user-role {
  background-color: #c9e8f5;
  color: #1b506a;
}

.created-at {
  font-style: italic;
}

.answer-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
  color: #2d4a1b;
}

.answer-content {
  font-size: 1em;
  line-height: 1.5;
  color: #315023;
}

.verifiedCard .answer-header {
  color: #215d75;
}

.verifiedCard .answer-title {
  color: #1d425e;
}

.verifiedCard .answer-content {
  color: #245f75;
}

.verifiedCard {
  border-color: #91cad7;
  background-color: #f0fffd;
}

.verificado {
  margin-top: 1em;
  padding: 6px 12px;
  background-color: #d1f5f4;
  color: #1e6e67;
  border-left: 5px solid #4caf9d;
  border-radius: 8px;
  font-weight: bold;
  font-size: 0.95em;
  display: inline-block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1366px) {

  .user-data,
  .specie-name {
    font-size: 0.9em;
  }

  .answer-title {
    font-size: 1.05em;
  }
  /* .verificado {
    width: 27%;
    font-size: 0.9em;
  } */

}
</style>
