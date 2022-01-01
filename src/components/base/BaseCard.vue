<template>
  <div>
    <dialog open>
      <h2>{{ title }}</h2>
      <div v-if="content === 'spinner'" class="loader"></div>
      <div class="slot" v-else>
        <slot></slot>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  props: ["title", "content"],
};
</script>

<style lang="scss" scoped>
dialog {
  width: 60%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  padding: 2rem;
  @media only screen and (max-width: 26rem) {
    width: 80%;
  }
  h2 {
    background-color: var(--color-secondary);
    padding: 1rem;
    color: var(--color-main-white);
  }
}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 2rem auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.slot {
  font-size: 3rem;
  margin: 3rem auto;
  @media only screen and (max-width: 26rem) {
    font-size: 1.6rem;
    text-align: center;
  }
}
</style>
