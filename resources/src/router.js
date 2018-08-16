import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Pages/Components.vue";
import NotFound from "./views/Pages/NotFound.vue";
import Landing from "./views/Pages/Landing.vue";
import Login from "./views/Authentication/Login.vue";
import Register from "./views/Authentication/Register.vue";
import ConfirmEmail from "./views/Authentication/ConfirmEmail.vue";
import ForgotPassword from "./views/Authentication/ForgotPassword.vue";
import ResetPassword from "./views/Authentication/ResetPassword.vue";
import Profile from "./views/Pages/Profile.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "*",
      name: "not-found",
      components: {
        header: AppHeader,
        default: NotFound,
        footer: AppFooter
      }
    },
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/email-confirmed/:email",
      name: "confirm-email",
      components: {
        header: AppHeader,
        default: ConfirmEmail,
        footer: AppFooter
      }
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      components: {
        header: AppHeader,
        default: ForgotPassword,
        footer: AppFooter
      }
    },
    {
      path: "/reset-password/:email/:token",
      name: "reset-password",
      components: {
        header: AppHeader,
        default: ResetPassword,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      },
      meta: { requiresAuth: true}
    }
  ],

  
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
})
