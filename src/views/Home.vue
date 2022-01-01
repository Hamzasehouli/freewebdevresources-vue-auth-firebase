<template>
  <transition name="opening">
    <div v-if="openingPage && $route.path === '/'" class="opening">
      <img class="opening__logo" src="logo-blue.png" /></div
  ></transition>
  <section class="home">
    <video autoplay muted loop>
      <source src="home.mp4" type="video/mp4" />
    </video>
    <div class="background"></div>
    <div class="hero">
      <h1 class="hero__heading heading-1">
        Welcome to the Free web dev resources
      </h1>
      <h2>
        Free web dev resources provides you with the best free resources to put
        your web dev skills to the next level
      </h2>
      <router-link class="link" :to="{ name: 'Auth' }">Get Started</router-link>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const openingPage = ref(null);
    onMounted(function () {
      document.title = "Home";
      openingPage.value = true;
      setTimeout(() => {
        openingPage.value = false;
      }, 3000);
    });
    return {
      openingPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw !important;
  height: 100vh !important;
  background-color: rgba(0, 0, 0, 0.479);
  color: var(--color-main-white);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: black;
    z-index: -9999;
    @media only screen and (max-width: 28rem) {
      display: none;
    }
  }
}

.background {
  @media only screen and (max-width: 28rem) {
    display: block;
  }
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: rgb(19, 19, 19);
  z-index: -9999;
  display: none;
}
.hero {
  display: fleX;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 70%;
  & > * {
    margin-bottom: 3rem;
  }
}

h1 {
  font-size: 5rem;
  @media only screen and (max-width: 34rem) {
    font-size: 3rem;
    text-align: center;
  }
}
h2 {
  font-size: 2rem;
  line-height: 150%;
  @media only screen and (max-width: 34rem) {
    font-size: 1.4rem;
    text-align: center;
  }
}

h1,
h2 {
  text-align: center;
}

a {
  text-decoration: none;
  color: var(--color-secondary-dark);
  background-color: var(--color-primary-dark);
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.418);
  display: inline-block;
  @media only screen and (max-width: 34rem) {
    display: block;
    margin: 0 auto;
    width: max-content;
  }
  &:hover {
    animation-name: btn;
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
  }
}

@keyframes btn {
  0% {
    transform: scale(1.2);
  }

  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.2);
  }
  75% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
}

.opening {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 7rem;
  }

  &__logo {
    animation-name: openinglogo;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }
}

.opening-leave-active {
  animation-name: opening;
  animation-duration: 0.1s;
}

@keyframes opening {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes openinglogo {
  0% {
    transform: rotate(15deg);
  }

  50% {
    transform: rotate(-15deg);
  }

  100% {
    transform: rotate(15deg);
  }
}
</style>
