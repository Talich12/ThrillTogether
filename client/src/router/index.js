import Vue from 'vue';
import Vuesax from 'vuesax';
import Router from 'vue-router';
import Registration from '@/components/Registration';
import Login from '@/components/Login';
import Main from '@/components/Main';
import StoryAdd from '@/components/StoryAdd';
import About from '@/components/About';
import Profile from '@/components/Profile';
import Notification from '@/components/Notification';
import Search from '@/components/Search';
import SubscriptionGenre from '@/components/SubscriptionGenre';
import Bookmarks from '@/components/Bookmarks';
import FollowedPosts from '@/components/FollowedPosts';
import LikeTop from '@/components/LikeTop'
import Genre from '@/components/Genre'
import GenreTop from '@/components/GenreTop'
import 'vuesax/dist/vuesax.css';
import 'boxicons';
import marked from 'marked';
import _ from 'lodash';

Vue.use(Router);
Vue.use(Vuesax, {
  colors: {
    primary:'#2A2A35',
    dark:'rgb(48, 48, 58)',
    success:'#EEEFF9',
    danger:'rgb(106, 78, 147)',
  },
})

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: '/storyadd',
      name: 'StoryAdd',
      component: StoryAdd
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/profile/:username',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/notification',
      name: 'Notification',
      component: Notification,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: Bookmarks,
    },
    {
      path: '/subscriptiongenre',
      name: 'subscriptiongenre',
      component: SubscriptionGenre,
    },
    {
      path: '/followedposts',
      name: 'followedposts',
      component: FollowedPosts,
    },
    {
      path: '/liketop',
      name: 'liketop',
      component: LikeTop,
    },
    {
      path: '/genre',
      name: 'genre',
      component: Genre,
    },
    {
      path: '/genretop/:id',
      name: 'genretop',
      component: GenreTop,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'thrilltogether'; // Set the title for the current route
  next();
});

export default router;