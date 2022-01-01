<template>
  <div :class="{ container: mode === 'bg' }">
    <div class="center">
      <slot class="kaka"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style lang="scss" scoped>
.container {
  background-color: var(--color-primary-light);
}
.center {
  max-width: 1040px;
  margin: 0 auto;
  padding: 7rem 0;
}
</style>
