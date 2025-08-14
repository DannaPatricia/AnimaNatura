<script>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { userStore } from '@/stores/userStore'
import UserCard from '@/components/UserCard.vue'
import userService from '@/services/userService'
import SideBar from '@/components/SideBar.vue'

export default {
    components: {
        UserCard,
        SideBar
    },
    setup() {
        const userList = ref([])
        const isLoading = ref(true)
        const router = useRouter()
        onMounted(async () => {
            const auth = userStore()

            if (!auth.isAuthenticated && auth.role != 'admin') {
                router.push('/login')
                return
            }

            try {
                userList.value = await userService.getUsers()
                console.log(userList.value)
            } catch (error) {
                console.log('No se han podido obtenner los usuarios', error)
            } finally {
                isLoading.value = false
            }
        })

        return {
            userList,
            isLoading
        }
    }
}
</script>
<template>
    <main>
        <div class="mainContainer">
            <div class="contentContainer">
                <SideBar />
            </div>
            <div v-if="isLoading" class="loadingText">Cargando usuarios...</div>

            <div class="user-list">
                <UserCard v-for="user in userList" :key="user.id" :user="user"></UserCard>
            </div>
        </div>

    </main>
</template>

<style scoped>
.user-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 2em 2em 2em 17%;
    gap: 2em;
}

.loadingText {
  grid-column: 1 / -1;
  text-align: center;
  margin: 3em 0 0 15%;
  font-size: 1.5em;
  font-weight: bold;
  color: #4a7543;
  animation: pulse 1.2s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.3;
  }

  50% {
    opacity: 1;
  }
}
</style>