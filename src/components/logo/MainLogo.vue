<template>
  <div
    class="mainLogo"
    @click="
      $vuetify.goTo(`#section0`, {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
      })
    "
  >
    <img class="mr-2" src="../../assets/logo.svg" />

    <div style="color: #fff; font-size: 2rem">
      <span style="color: #e54617; font-weight: bold">F</span>ume
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mainLogo {
  display: flex;
  align-items: center;
  user-select: none;

  cursor: pointer;

  img {
    height: 40px;
  }
}
</style>

<script>
export default {
  name: "MainLogo",
};
</script>
