<template>
  <v-card
    v-intersect.once="onIntersect"
    :class="[isHover ? 'elevation-10 on-hover' : 'elevation-1', 'common-card']"
    @mouseover="isHover = true"
    @focusin="isHover = true"
    @mouseleave="isHover = false"
    @focusout="isHover = false"
  >
    <v-img
      :src="item.img"
      height="225px"
      gradient="to top left, rgba(181,65,240,.2), rgba(25,32,72,.7)"
    >
      <v-card-text class="text-h6 white--text">
        <v-row class="fill-height flex-column" justify="space-between">
          <p class="ma-4 mt-10 subheading">
            {{ item.text }}
          </p>
        </v-row>
      </v-card-text>
    </v-img></v-card
  >
</template>

<script>
export default {
  name: "CommonCard",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data: () => ({
    isHover: false,
  }),
  methods: {
    onIntersect(entries) {
      const element = entries[0].target;

      element.classList.add(
        "animate__animated",
        "animate__backInUp",
        "animate__slow"
      );

      element.addEventListener("animationend", () => {
        element.classList.remove(
          "animate__animated",
          "animate__backInUp",
          "animate__slow"
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.common-card {
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  min-height: 50px;
  max-height: 250px;
  overflow: hidden;
  color: inherit;
  border-radius: 12px;
  transition: all 0.4s ease-in-out;
}

.common-card:not(.on-hover) {
  opacity: 0.85;
}
</style>
