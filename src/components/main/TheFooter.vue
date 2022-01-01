<template>
  <footer class="footer">
    <div class="author">
      Made by <a href="https://hamzasehouli.ma">Hamza Sehouli</a>
    </div>
    <svg @click="scrollTo"><use href="sprite.svg#chevron-up"></use></svg>
  </footer>
</template>
<script>
export default {
  methods: {
    scrollTo() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--color-secondary-dark);
  color: var(--color-main-white);
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  @media only screen and (max-width: 19rem) {
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: var(--color-primary-dark);
  }
}

svg {
  width: 5rem;
  height: 5rem;
  background-color: var(--color-main-white);
  fill: var(--color-secondary);
  cursor: pointer;
  @media only screen and (max-width: 19rem) {
    width: 3rem;
    height: 3rem;
    margin-top: 2rem;
  }
}
</style>
