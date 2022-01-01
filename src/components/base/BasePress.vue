<template>
  <button :class="mode" :type="type"><slot></slot></button>
</template>

<script>
export default {
  props: ["type", "mode"],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
button {
  outline: none;
  border: none;
  padding: 1rem;
  border-radius: 1px;
  cursor: pointer;
  font-size: 1.6rem;
  display: inline-block;
  transition: all 0.2s;
  &:not(:last-of-type) {
    margin-right: 1.5rem;
  }
}
.flat {
  background-color: var(--color-secondary);
  color: var(--color-main-white);
  border: 2px solid transparent;
  &:hover {
    background-color: transparent;
    border: 2px solid var(--color-secondary);
    color: var(--color-secondary);
    @media only screen and (max-width: 24rem) {
      background-color: var(--color-secondary);
      color: var(--color-main-white);
      border: 2px solid transparent;
    }
  }
}
.empty {
  background-color: transparent;
  border: 2px solid var(--color-secondary);
  color: var(--color-secondary);
  &:hover {
    background-color: var(--color-secondary);
    color: var(--color-main-white);
    border: 2px solid transparent;
    @media only screen and (max-width: 24rem) {
      background-color: transparent;
      border: 2px solid var(--color-secondary);
      color: var(--color-secondary);
    }
  }
}
</style>
