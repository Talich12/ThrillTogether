<template>
  <div class="hidden" style="position: sticky; top: 0px;">
    <vs-sidebar background="dark" text-white absolute v-model="active" open square
      style="width: 16%; max-width: 100%; height: 100vh;">
      <template #logo>
        <!-- ...img logo -->
      </template>
      <hr class="rounded" style="margin-top: 2vh;">
      <vs-sidebar-item id="main" to="/">
        <template #icon>
          <i class='bx bxs-home' style="font-size: 1vw;"></i>
        </template>
        <p style="font-size:1vw; font-family: 'Unbounded'; font-weight: bolder;">Главная страница</p>
      </vs-sidebar-item>

      <vs-sidebar-item id="search" to="/search">
        <template #icon>
          <i class='bx bxs-search' style="font-size: 1vw;"></i>
        </template>
        <p style="font-size: 1vw; font-family: 'Unbounded'; font-weight: bolder;">Поиск</p>
      </vs-sidebar-item>
      <hr class="rounded">
      <vs-sidebar-item v-if="$cookies.isKey('access_token')" id="recommendations">
        <template #icon>
          <i class='bx bx-merge' style="font-size: 1vw;"></i>
        </template>
        <p style="font-size: 1vw; font-family: 'Unbounded'; font-weight: bolder;">Рекомендации</p>
      </vs-sidebar-item>

      <vs-sidebar-item v-if="$cookies.isKey('access_token')" to="/followedposts" id="authors">
          <template #icon>
            <i class='bx bxs-user' style="font-size: 1vw;"></i>
          </template>
          <vs-tooltip right danger>
            <p style="font-size: 1vw; font-family: 'Unbounded'; font-weight: bolder;">Авторы</p>

            <template #tooltip>
              Кнопка быстрого доступа к вашим любимым авторам!
            </template>
          </vs-tooltip>
        </vs-sidebar-item>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow style="margin-right: 7%;">
            <template #icon>
              <i class='bx bxs-spreadsheet' style="font-size: 1vw;"></i>
            </template>
            <p style="font-size: 1vw; font-family: 'Unbounded'; font-weight: bolder;">Подборки</p>
          </vs-sidebar-item>
        </template>


        <vs-sidebar-item to="/genre" id="genre">
          <template #icon>
            <i class='bx bxs-book' style="font-size: 1vw;"></i>
          </template>
          <vs-tooltip right danger>
            <p style="font-size: 1vw; font-family: 'Unbounded'; font-weight: bolder;">По жанрам</p>

            <template #tooltip>
              Лучшие в своем жанре!
            </template>
          </vs-tooltip>
        </vs-sidebar-item>


        <vs-sidebar-item id="winners">
          <template #icon>
            <i class='bx bxs-trophy' style="font-size: 1vw;"></i>
          </template>
          <vs-tooltip right danger>
            <p style="font-size: 1vw; font-family: 'Unbounded'; font-weight: bolder;">Победители</p>

            <template #tooltip>
              Истории-победители в еженедельном конкурсе!
            </template>
          </vs-tooltip>
        </vs-sidebar-item>


        <vs-sidebar-item id="admin">
          <template #icon>
            <i class='bx bxs-quote-right' style="font-size: 1vw;"></i>
          </template>
          <vs-tooltip right danger>
            <p style="font-size: 1vw; font-family: 'Unbounded'; font-weight: bolder;">От редакции</p>

            <template #tooltip>
              Истории отобранные администрацией.
            </template>
          </vs-tooltip>
        </vs-sidebar-item>


        <vs-sidebar-item to="/liketop" id="likes">
          <template #icon>
            <i class='bx bxs-like' style="font-size: 1vw;"></i>
          </template>
          <vs-tooltip right danger>
            <p style="font-size: 1vw; font-family: 'Unbounded'; font-weight: bolder;">По лайкам</p>

            <template #tooltip>
              Самые любимые истории пользователей.
            </template>
          </vs-tooltip>
          
        </vs-sidebar-item>
      </vs-sidebar-group>
        <hr class="rounded">
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow style="margin-right: 7%;">
            <template #icon>
              <i class='bx bxs-toggle-right' style="font-size: 1vw;"></i>
            </template>
            <p style="font-size: 0.95vw; font-family: 'Unbounded'; font-weight: bolder;">Содержание</p>
          </vs-sidebar-item>
        </template>
        <vs-sidebar-item>
          <template #icon>
            <i class='bx bxs-microphone-alt' style="font-size: 1vw;"></i>
          </template>
          <vs-switch v-model="audio" danger style="background-color: black;">С озвучкой</vs-switch>
        </vs-sidebar-item>

        <vs-sidebar-item>
          <template #icon>
            <i class='bx bxs-film' style="font-size: 1vw;"></i>
          </template>
          <vs-switch v-model="video" danger style="background-color: black;">С видео</vs-switch>
        </vs-sidebar-item>
        <vs-sidebar-item>
          <template #icon>
            <i class='bx bx-angry' style="font-size: 1vw; color: #FF0000;"></i>
          </template>
          <vs-switch v-model="curse" color="#FF0000" style="background-color: black;"><p style="font-size: 0.66vw;">Нецензурная лексика</p></vs-switch>
        </vs-sidebar-item>

        <vs-sidebar-item>
          <template #icon>
            <i class='bx bx-knife' style="font-size: 1vw; color: #FF0000;"></i>
          </template>
          <vs-switch v-model="violence" color="#FF0000" style="background-color: black;">Кровь/Насилие</vs-switch>
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-sidebar-item v-if="$cookies.isKey('access_token')" to="/bookmarks" id="bookmarks">
        <template #icon>
          <i class='bx bxs-bookmark' style="font-size: 1vw;"></i>
        </template>
        <p style="font-size: 1vw; font-family: 'Unbounded'; font-weight: bolder;">Закладки</p>
      </vs-sidebar-item>
      <hr class="rounded">

      <vs-sidebar-item to="/about" id="help">
        <template #icon>
          <i class='bx bxs-help-circle' style="font-size: 1vw;"></i>
        </template>
        <p style="font-size: 1vw; font-family: 'Unbounded'; font-weight: bolder;">О нас</p>
      </vs-sidebar-item>

      <template #footer>
        <vs-row justify="space-between">
          <router-link v-if="$cookies.isKey('access_token')" v-model="active" :to="ProfileUrl">
            <div class="center con-avatars">
              <vs-avatar @click="active = ''">
                <img :src="UserIcon" alt="">
              </vs-avatar>
            </div>
          </router-link>
          <Login v-if="!$cookies.isKey('access_token')"></Login>
          <router-link v-model="active" to="/notification" style="text-decoration: none;">
            <div class="center con-avatars">
              <vs-avatar badge-color="dark" badge-position="top-right" style="padding-top: 4; background: #EEEFF9;">
                <i class='bx bx-bell' style="color: #6A4E93;" @click="active = ''"></i>
              </vs-avatar>
            </div>
          </router-link>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import Login from './Login.vue'
import axios from 'axios';
export default {
  components: {
    Login
  },
  data: () => ({
    audio: false,
    video: false,
    curse: false,
    violence: false,
    active: '',
    ProfileUrl: '/profile/' + $cookies.get("login"),
    User: [],
    UserIcon: require(`@/assets/img/load/sample1.jpg`),
  }),
  methods: {
    GetUserData() {
      if (!this.$cookies.isKey('login')) {
        return
      }
      const path = "http://localhost:3000/profile/" + this.$cookies.get('login');
      axios.get(path, {
        headers: {
          'Authorization': 'Bearer ' + this.$cookies.get("access_token"),
        }
      })
        .then((response) => {
          console.log(response.data);
          const data = response.data;
          this.User = data;
          this.UserIcon = require(`@/assets/img/load/${data.avatar}`)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    audio: function () {
      this.$emit('audio', { audio: this.audio })
    },
    video: function(){
      this.$emit('video', {video: this.video})
    },
    curse: function(){
      this.$emit('curse', {curse: this.curse})
    },
    violence: function(){
      this.$emit('violence', {violence: this.violence})
    }
  },
  created() {
    this.GetUserData()
    console.log(this.$cookies.get('access_token'))
    console.log(this.$cookies.get('login'))
  }
};
</script>

<style>
  hr.rounded {
  border-top: 0.2vh solid #6A4E93;
  border-radius: 15px;
  width: 8vw;
  margin: auto;
  margin-top: 2.5vh;
  margin-bottom: 0vh;
}
</style>