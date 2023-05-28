<template>
  <v-card
    :itemId="item.id"
    v-intersect.once="onIntersectTimeLine"
    :class="[isHover ? 'elevation-24' : 'elevation-2']"
    style="
      background: #4f5980;
      border-radius: 16px;
      transition: all 0.4s ease-in-out;
    "
    @mouseover="isHover = true"
    @focusin="isHover = true"
    @mouseleave="isHover = false"
    @focusout="isHover = false"
  >
    <v-card-title
      :style="
        $vuetify.breakpoint.smAndDown ? 'font-size: 1rem' : 'font-size: 1.5rem'
      "
      style="background: #4f5980; color: #fff; border-radius: 16px 16px 0 0"
    >
      {{ item.title }}
    </v-card-title>
    <v-card-text style="background: #fff; min-height: 76px" class="pt-4">
      {{ item.text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TimlineCard",
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
    onIntersectTimeLine(entries) {
      const element = entries[0].target;

      let side = element.getAttribute("itemId");

      if (+side % 2 !== 0) {
        element.classList.add("animate__backInLeft");

        element.addEventListener("animationend", () => {
          element.classList.remove("animate__backInLeft");
        });
      } else {
        element.classList.add("animate__backInRight");

        element.addEventListener("animationend", () => {
          element.classList.remove("animate__backInRight");
        });
      }

      element.classList.add("animate__animated", "animate__slow");

      element.addEventListener("animationend", () => {
        element.classList.remove("animate__animated", "animate__slow");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.light-color {
  color: #fff;
}
</style>
