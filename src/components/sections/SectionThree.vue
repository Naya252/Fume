<template>
  <div class="mx-2">
    <h2
      class="py-8"
      :style="
        $vuetify.breakpoint.mdAndUp
          ? 'font-size: 2rem'
          : $vuetify.breakpoint.smOnly
          ? 'font-size: 1.6rem'
          : 'font-size: 1.4rem'
      "
    >
      Team
    </h2>

    <div id="team" style="position: relative">
      <div
        style="
          position: absolute;
          top: 0;
          left: 300px;
          border-radius: 16px;
          overflow: auto;
          z-index: 1;
        "
      >
        <v-card
          elevation="10"
          class="mx-auto"
          max-width="400"
          id="queue1"
          v-intersect.once="onIntersect1"
          style="overflow: hidden"
        >
          <v-img
            src="../../assets/team/1.jpg"
            height="300px"
            style="overflow: hidden"
          ></v-img>
        </v-card>
      </div>

      <div
        style="
          position: absolute;
          top: 280px;
          left: 250px;
          border-radius: 16px;
          overflow: auto;
          z-index: 3;
        "
      >
        <v-card
          elevation="10"
          class="mx-auto"
          max-width="300"
          id="queue2"
          v-intersect.once="onIntersect2"
          style="overflow: hidden"
        >
          <v-img
            src="../../assets/team/6.jpg"
            height="200px"
            style="overflow: hidden"
          ></v-img>
        </v-card>
      </div>

      <div
        style="
          position: absolute;
          top: 50px;
          left: 0;
          border-radius: 16px;
          overflow: auto;
          z-index: 2;
        "
      >
        <v-card
          elevation="10"
          class="mx-auto"
          max-width="350"
          id="queue3"
          v-intersect.once="onIntersect3"
          style="overflow: hidden"
        >
          <v-img
            src="../../assets/team/9.jpg"
            height="300px"
            style="overflow: hidden"
          ></v-img>
        </v-card>
      </div>

      <div
        style="
          position: absolute;
          top: 80px;
          right: 0;
          border-radius: 16px;
          overflow: auto;
          z-index: 5;
        "
      >
        <v-card
          elevation="10"
          class="mx-auto"
          max-width="600"
          id="queue4"
          v-intersect.once="onIntersect4"
          style="overflow: hidden"
        >
          <v-img
            src="../../assets/team/11.jpg"
            min-height="300px"
            style="overflow: hidden"
          ></v-img>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionThree",
  props: {},
  data: () => ({}),
  methods: {
    onIntersect1(entries) {
      const element = entries[0].target;

      element.classList.add(
        "animate__animated",
        "animate__backInDown",
        "animate__slow"
      );

      element.addEventListener("animationend", () => {
        element.classList.remove(
          "animate__animated",
          "animate__backInDown",
          "animate__slow"
        );
      });
    },
    onIntersect2(entries) {
      const element = entries[0].target;

      element.classList.add(
        "animate__animated",
        "animate__backInDown",
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
    onIntersect3(entries) {
      const element = entries[0].target;

      element.classList.add(
        "animate__animated",
        "animate__backInUp",
        "animate__slow"
      );

      element.addEventListener("animationend", () => {
        element.classList.remove(
          "animate__animated",
          "animate__backInDown",
          "animate__slow"
        );
      });
    },
    onIntersect4(entries) {
      const element = entries[0].target;

      element.classList.add(
        "animate__animated",
        "animate__backInRight",
        "animate__slow"
      );

      element.addEventListener("animationend", () => {
        element.classList.remove(
          "animate__animated",
          "animate__backInRight",
          "animate__slow"
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
