<template>
  <h2
    :class="{ 'light-color': light }"
    class="py-8"
    :style="
      $vuetify.breakpoint.mdAndUp
        ? 'font-size: 2rem'
        : $vuetify.breakpoint.smOnly
        ? 'font-size: 1.6rem'
        : 'font-size: 1.4rem'
    "
  >
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: "CommonTitle",
  props: {
    light: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.light-color {
  color: #fff;
}
</style>
