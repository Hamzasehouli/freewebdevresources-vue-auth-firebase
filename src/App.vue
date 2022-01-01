<template>
  <div>
    <the-header v-if="$route.path !== '/'"></the-header>
    <main>
      <router-view></router-view>
    </main>
    <the-footer v-if="$route.path !== '/'"></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/main/TheHeader.vue";
import TheFooter from "./components/main/TheFooter.vue";
export default {
  components: { TheHeader, TheFooter },
  created() {
    const email = window.localStorage.getItem("email");
    const localId = window.localStorage.getItem("localId");
    const idToken = window.localStorage.getItem("token");

    if (!idToken) return;
    this.$store.dispatch("auth/checkLogged", true);

    this.$store.dispatch("auth/fetchUserData", { email, localId, idToken });
  },
  mounted() {
    this.$store.dispatch("auth/setTimer");
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,700;1,300&display=swap");
:root {
  --color-primary-light: #fdf8c0;
  --color-primary: #fbec5d;
  --color-primary-dark: #ecd606;

  --color-secondary-light: #73baff;
  --color-secondary: #1e90ff;
  --color-secondary-dark: #005db7;

  --color-main-black: #36454f;
  --color-main-white: #fefefa;
}
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  position: relative;
  font-size: 1.6rem;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  color: var(--color-main-black);
  font-family: "Ubuntu", sans-serif;
  width: 100%;
}

main {
  // margin: 0 auto;
  min-height: 100vh;
  // width: 1040px;
}
</style>
