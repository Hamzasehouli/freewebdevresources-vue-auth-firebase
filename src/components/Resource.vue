<template>
  <li class="resources__item">
    <img :src="resource.imgPath" class="logo" />
    <a target="_blank" :href="resource.link">{{ resource.title }}</a>
    <p>
      {{ resource.para }}
    </p>
  </li>
</template>

<script>
export default {
  props: ["resource"],
};
</script>

<style lang="scss" scoped>
.logo {
  height: 4rem;
  width: 4rem;
  display: block;
  margin-bottom: 2rem;
}

a {
  text-decoration: none;
  display: inline-block;
  color: var(--color-main-black);
  font-weight: 700;
  margin-bottom: 1rem;
}
</style>
