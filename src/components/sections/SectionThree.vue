<template>
  <div class="mx-2">
    <CommonTitle>Team</CommonTitle>

    <div id="team" style="position: relative">
      <div
        v-for="img in images"
        :key="img.id"
        style="
          position: absolute;
          border-radius: 16px;
          overflow: hidden;
          width: 100%;
        "
        :style="img.style"
      >
        <v-card
          :elevation="img.elevation"
          class="mx-auto my-10"
          :width="img.width"
          :id="img.anchor"
          v-intersect.once="img.func"
        >
          <v-img
            :src="img.src"
            :height="img.imgHeight"
            :position="img.position"
          ></v-img>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import CommonTitle from "../CommonTitle";
export default {
  name: "SectionThree",
  components: {
    CommonTitle,
  },
  data: () => ({}),
  computed: {
    images() {
      let arr = [
        {
          id: 1,
          style: "top: -70px; right: -50%; z-index: 2;",
          width: "50%",
          anchor: "queue2",
          src: require("../../assets/team/1.jpg"),
          imgHeight: "40%",
          func: this.onIntersect2,
          position: "top center",
          elevation: 10,
        },
        {
          id: 2,
          style: "top: 280px; left: 250px; z-index: 5;",
          width: "50%",
          anchor: "queue3",
          src: require("../../assets/team/6.jpg"),
          imgHeight: "200px",
          func: this.onIntersect3,
          position: "center center",
          elevation: 10,
        },
        {
          id: 3,
          style: "top: -30px; left: 80px; z-index: 4;",
          width: "45%",
          anchor: "queue4",
          src: require("../../assets/team/9.jpg"),
          imgHeight: "20%",
          func: this.onIntersect4,
          position: "center center",
          elevation: 24,
        },
        {
          id: 4,
          style: "top: 80px; left: -150px; z-index: 1;",
          width: "60%",
          anchor: "queue1",
          src: require("../../assets/team/11.jpg"),
          imgHeight: "500px",
          func: this.onIntersect1,
          position: "bottom left",
          elevation: 10,
        },
      ];
      return arr;
    },
  },

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
