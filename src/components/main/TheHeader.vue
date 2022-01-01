<template>
  <header class="header">
    <nav class="nav">
      <router-link class="logo-link" to="/">
        <img class="logo" src="logo-blue.png" />
      </router-link>
      <ul class="list email-list" v-if="$store.getters['auth/isLoggedIn']">
        <li class="item">
          <base-press @click="logout" type="button" mode="empty"
            >Logout</base-press
          >
        </li>
        <li class="item email">
          <span>{{ $store.getters["auth/getUser"]?.email }}</span>
        </li>
      </ul>

      <ul class="list" v-else>
        <li class="item">
          <router-link to="/auth?auth=login">Login</router-link>
        </li>
        <li class="item">
          <router-link to="/auth?auth=signup">Signup</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const logout = function () {
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("localId");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("date");
      store.dispatch("auth/checkLogged", false);
      router.replace({ name: "Auth" });
      store.dispatch("auth/clearSetTimer");
    };
    return { logout };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: var(--color-primary);
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 23rem) {
    flex-direction: column;
    padding: 3rem;
  }
}

.logo {
  height: 180%;
  width: auto;
  object-fit: cover;
  &-link {
    height: 7rem;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 19rem) {
      height: 4rem;
      margin-bottom: 3rem;
    }
  }
}
.list {
  display: flex;
  list-style: none;
  align-items: center;
  & > * {
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  a {
    padding: 1rem;
    border: 2px solid var(--color-secondary);
    color: var(--color-secondary);
    text-decoration: none;
    transition: all 0.2s;
    &:hover {
      background-color: var(--color-secondary);
      color: white;
    }
  }
}

.email-list {
  @media only screen and (max-width: 28rem) {
    flex-direction: column;
  }
}

.email {
  @media only screen and (max-width: 28rem) {
    margin-top: 2rem;
  }
}
</style>
