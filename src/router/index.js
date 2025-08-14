import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProfileListView from '../views/ProfileListView.vue'
import ProfileListViewFiltered from '../views/ProfileListViewFiltered.vue'
import ProfileView from '@/views/ProfileView.vue'
import QuestionListView from '@/views/QuestionListView.vue'
import UserQuestionListView from '@/views/UserQuestionListView.vue'
import AnswerListView from '@/views/AnswerListView.vue'
import CreateQuestionFormView from '@/views/CreateQuestionFormView.vue'
import ManageUsersView from '@/views/ManageUsersView.vue'
import CreateProfileView from '@/views/CreateProfileView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/profile-List-View',
      name: 'ProfileListView',
      component: ProfileListView,
      props: true,
    },
    {
      path: '/profile-List-filtered/:id',
      name: 'ProfileListFiltered',
      component: ProfileListViewFiltered,
    },
    {
      path: '/profile/:id',
      name: 'animalProfile',
      component: ProfileView,
    },
    {
      path: '/questionsLits/:id',
      name: 'questionListView',
      component: QuestionListView,
    },
    {
      path: '/questionsListUser',
      name: 'userQuestionListView',
      component: UserQuestionListView,
    },
    {
      path: '/answerByQuestion/:id',
      name: 'answerListView',
      component: AnswerListView,
    },
    {
      path: '/createQuestion/',
      name: 'createQuestion',
      component: CreateQuestionFormView,
    },
    {
      path: '/manageUsers/',
      name: 'manageUsers',
      component: ManageUsersView,
    },
    {
      path: '/createProfile/',
      name: 'createProfile',
      component: CreateProfileView,
    },
  ],
})

export default router
