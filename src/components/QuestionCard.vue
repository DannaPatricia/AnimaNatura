<template>
  <RouterLink v-if="question" class="question-card" :to="{ name: 'answerListView', params: { id: question.id } }">
    <img v-if="question.image_url" :src="question.image_url" alt="Imagen de pregunta" class="question-image" />
    <div class="question-info">
      <div class="user-data">
        <span class="user-name">{{ question.userName }}</span>
        <span class="createdAt">{{ question.lastUploaded }}</span>
      </div>
      <h2 class="question-title">{{ question.title }}</h2>
      <span class="specie-name">{{ question.specieName }}</span>
      <div class="extraContainer">
        <span class="question-type">{{ question.type }}</span>
        <span class="animal-type">{{ question.animalTypeName }}</span>
      </div>
      <div v-if="isDetail" class="question-content">
        {{ question.content }}
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    },
    isDetail: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.question-card {
  display: flex;
  align-items: flex-start;
  background-color: #fffcf0;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 60, 120, 0.1);
  min-height: 130px;
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

.question-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 14px rgba(0, 60, 120, 0.2);
}

.question-image {
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 20px;
}

.question-info {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

.user-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
  color: #946630;
  font-weight: bold;
}

.user-name {
  font-weight: bold;
}

.createdAt {
  font-style: italic;
  color: #7b5d36;
}

.question-title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #503b23;
}

.question-content {
  margin-top: 1em;
  line-height: 1.5em;
  font-size: 1.15em;
  color: #503b23;
}

.specie-name {
  font-size: 16px;
  font-weight: 600;
  color: #85662d;
}

.extraContainer {
  display: flex;
  flex-direction: row;
  gap: 0.5em;
}

.question-type,
.animal-type {
  text-transform: capitalize;
  font-size: 13px;
  padding: 4px 10px;
  border-radius: 20px;
  width: fit-content;
  font-weight: 500;
}

.animal-type {
  background-color: #d3f1e6;
  color: #1a5c48;
}

.question-type {
  background-color: #f5e1cb;
  color: #7a4a1b;
}


@media (max-width: 1366px) {

  .user-data,
  .specie-name {
    font-size: 0.9em;
  }

  .question-title {
    font-size: 1.05em;
  }

  .question-content {
    font-size: 1em;
  }
}
</style>
