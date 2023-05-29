<template>
  <v-card
    dark
    :style="img.borderR"
    style="position: relative; overflow: hidden"
    :id="img.anchor"
    :elevation="img.elevation"
    class="mx-auto my-10"
    :width="img.width"
    :min-width="img.minWidth"
    v-intersect.once="img.func"
  >
    <v-img
      :gradient="img.gradient"
      :src="img.src"
      :height="img.imgHeight"
      :position="img.position"
    ></v-img>
    <div
      class="overlay"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
    ></div>
  </v-card>
</template>

<script>
export default {
  name: "CommonImgCard",
  props: {
    img: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
#queue4,
#queue7 {
  animation-delay: 2s;
}
#queue5,
#queue6 {
  animation-delay: 3s;
}
#queue8 {
  animation-delay: 4s;
}
#queue9 {
  animation-delay: 5s;
}
#queue1,
#queue2,
#queue3,
#queue4,
#queue5,
#queue6,
#queue7,
#queue8,
#queue9 {
  transition: all 2s ease-in-out;
}

.overlay {
  opacity: 0;
  transition: all 4s ease-in-out;
}

.gradient1 .overlay,
.gradient2 .overlay {
  background-color: #000;
  opacity: 0.5;
}

.gradient3 .overlay {
  background-color: #000;
  opacity: 0.4;
}

.gradient4 .overlay,
.gradient7 .overlay {
  background-color: #000;
  opacity: 0.3;
}

.gradient5 .overlay,
.gradient6 .overlay {
  background-color: #000;
  opacity: 0.2;
}

.gradient8 .overlay {
  background-color: #000;
  opacity: 0.15;
}
</style>
