<template>
  <div class="mx-2">
    <CommonTitle light>Why us</CommonTitle>

    <v-timeline
      class="mt-3 mx-md-6 mr-3 mr-md-0 my-8"
      :dense="$vuetify.breakpoint.smAndDown"
      v-intersect.once="onIntersectTimeLineDot"
    >
      <v-timeline-item
        v-for="item in timelineList"
        :key="item.id"
        :itemId="item.id"
        color="#e54617"
        :large="$vuetify.breakpoint.lgAndUp"
        :small="$vuetify.breakpoint.smAndDown"
      >
        <v-card
          :itemId="item.id"
          v-intersect.once="onIntersectTimeLine"
          class="elevation-2"
          style="background: #4f5980; border-radius: 16px"
        >
          <v-card-title
            :style="
              $vuetify.breakpoint.smAndDown
                ? 'font-size: 1rem'
                : 'font-size: 1.5rem'
            "
            style="
              background: #4f5980;
              color: #fff;
              border-radius: 16px 16px 0 0;
            "
          >
            {{ item.title }}
          </v-card-title>
          <v-card-text style="background: #fff; min-height: 76px" class="pt-4">
            {{ item.text }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import CommonTitle from "../CommonTitle";
export default {
  name: "SectionTwo",
  components: {
    CommonTitle,
  },
  data: () => ({
    timelineList: [
      {
        id: 1,
        title: "We are among pioneers",
        text: "Business is expanding in Uzbekistan, but aroma businesses remain a few",
      },
      {
        id: 2,
        title: "Aroma branding",
        text: "We will select the fragrance, which will become a hallmark of your brand!",
      },
      {
        id: 3,
        title: "Aroma marketing",
        text: "Using pleasant and familiar odors with the intention of positive interaction with clients",
      },
      {
        id: 4,
        title: "Aroma products",
        text: "We create premium aroma products for presenting them to you clients or partners",
      },
    ],
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
    onIntersectTimeLineDot(entries) {
      const element = entries[0].target;

      element.classList.add(
        "animate__animated",
        "animate__zoomIn",
        "animate__slow"
      );

      element.addEventListener("animationend", () => {
        element.classList.remove(
          "animate__animated",
          "animate__zoomIn",
          "animate__slow"
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-application--is-ltr
  .v-timeline
  .v-timeline-item
  .v-timeline-item__body
  > .v-card::before,
.v-application--is-ltr
  .v-timeline
  .v-timeline-item
  .v-timeline-item__body
  > .v-card::after {
  display: none !important;
}

.v-timeline--dense::before {
  left: calc(25px - 1px) !important;
}
</style>

<style lang="scss">
.v-timeline--dense .v-timeline-item__divider {
  min-width: 50px !important;
}

.v-timeline--dense .v-timeline-item__body {
  max-width: calc(100% - 50px) !important;
}
</style>
