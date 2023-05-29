<template>
  <div class="mx-2" style="height: 100%; max-height: 1200px">
    <CommonTitle>Team</CommonTitle>

    <div id="team" style="position: relative; height: 100%">
      <div
        v-for="img in images"
        :key="img.id"
        style="position: absolute; overflow: hidden; width: 100%"
        :style="img.style"
      >
        <CommonImgCard :img="img" />
      </div>
    </div>
  </div>
</template>

<script>
import CommonTitle from "../CommonTitle";
import CommonImgCard from "../CommonImgCard";
export default {
  name: "SectionThree",
  components: {
    CommonTitle,
    CommonImgCard,
  },
  data: () => ({}),
  computed: {
    images: {
      get() {
        return [
          {
            id: 1,
            style: "top: 10%; right: -50%; z-index: 1;",
            width: "90%",
            minWidth: "",
            src: require("../../assets/team/1.jpg"),
            imgHeight: "19rem",
            func: this.onIntersect1,
            position: "center center",
            elevation: 10,
            anchor: "queue1",
            gradient: "to top right, rgba(0,0,0,.2), rgba(39,39,39,.5)",
            borderR: "border-radius:16px",
          },
          {
            id: 2,
            style: "top: 20%; left: -50%; z-index: 2;",
            width: "60%",
            minWidth: "",
            src: require("../../assets/team/4.jpg"),
            imgHeight: "20rem",
            func: this.onIntersect2,
            position: "bottom left",
            elevation: 11,
            anchor: "queue2",
            gradient: "to top right, rgba(0,0,0,.4), rgba(39,39,39,.7)",
            borderR: "border-radius:16px",
          },
          {
            id: 3,
            style: "top: 4rem; left: -10%; z-index: 3;",
            width: "50%",
            minWidth: "",
            src: require("../../assets/team/2.jpg"),
            imgHeight: "13rem",
            func: this.onIntersect3,
            position: "center center",
            elevation: 12,
            anchor: "queue3",
            gradient: "",
            borderR: "border-radius:1.7rem",
          },
          {
            id: 4,
            style: "top: -30px; left: 25%; z-index: 4;",
            width: "45%",
            minWidth: "",
            src: require("../../assets/team/3.jpg"),
            imgHeight: "13rem",
            func: this.onIntersect4,
            position: "top center",
            elevation: 13,
            anchor: "queue4",
            gradient: "to top right, rgba(0,0,0,.1), rgba(39,39,39,.1)",
            borderR: "border-radius:2rem",
          },
          {
            id: 5,
            style: "top: -5rem; left: -28%; z-index: 5;",
            width: "40%",
            minWidth: "",
            src: require("../../assets/team/5.jpg"),
            imgHeight: "15rem",
            func: this.onIntersect5,
            position: "center center",
            elevation: 14,
            anchor: "queue5",
            gradient: "to top right, rgba(0,0,0,.1), rgba(39,39,39,.1)",
            borderR: "border-radius:16px 6rem",
          },
          {
            id: 6,
            style: "bottom: 15%; right: -20%; z-index: 6;",
            width: "60%",
            minWidth: "",
            src: require("../../assets/team/6.jpg"),
            imgHeight: "18rem",
            func: this.onIntersect6,
            position: "center right",
            elevation: 15,
            anchor: "queue6",
            gradient: "to top right, rgba(0,0,0,.1), rgba(39,39,39,.1)",
            borderR: "border-radius: 6rem 16px",
          },
          {
            id: 7,
            style: "bottom: 23%; left: -34%; z-index: 7;",
            width: "30%",
            minWidth: "",
            src: require("../../assets/team/7.jpg"),
            imgHeight: "20%",
            func: this.onIntersect7,
            position: "center right",
            elevation: 16,
            anchor: "queue7",
            gradient: "to top right, rgba(0,0,0,.2), rgba(39,39,39,.5)",
            borderR: "border-radius:4rem",
          },
          {
            id: 8,
            style: "bottom: 5%; left: 2%; z-index: 10;",
            width: "25%",
            minWidth: "220px",
            src: require("../../assets/team/8.jpg"),
            imgHeight: "10rem",
            func: this.onIntersect8,
            position: "center left",
            elevation: 17,
            anchor: "queue8",
            borderR: "border-radius:4rem",
          },
          {
            id: 9,
            style: "top: 25%; left: -5%; z-index: 9;",
            width: "65%",
            minWidth: "350px",
            src: require("../../assets/team/9.jpg"),
            imgHeight: "17rem",
            func: this.onIntersect9,
            position: "center right",
            elevation: 18,
            anchor: "queue9",
            borderR: "border-radius:4rem",
          },
        ];
      },
      set(newD) {
        console.log(newD);
      },
    },
  },

  methods: {
    onIntersect1(entries) {
      const element = entries[0].target;

      element.classList.add(
        "animate__animated",
        "animate__backInLeft",
        "animate__slow"
      );

      element.addEventListener("animationend", () => {
        element.classList.remove(
          "animate__animated",
          "animate__backInLeft",
          "animate__slow"
        );
      });

      setTimeout(() => element.classList.add("gradient1"), 1000);
    },
    onIntersect2(entries) {
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

      setTimeout(() => element.classList.add("gradient2"), 1000);
    },
    onIntersect3(entries) {
      const element = entries[0].target;

      element.classList.add(
        "animate__animated",
        "animate__backInUp",
        "animate__delay-1s",
        "animate__slow"
      );

      element.addEventListener("animationend", () => {
        element.classList.remove(
          "animate__animated",
          "animate__backInUp",
          "animate__delay-1s",
          "animate__slow"
        );
      });

      setTimeout(() => element.classList.add("gradient3"), 2000);
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

      setTimeout(() => element.classList.add("gradient4"), 3000);
    },
    onIntersect5(entries) {
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

      setTimeout(() => element.classList.add("gradient5"), 4000);
    },
    onIntersect6(entries) {
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

      setTimeout(() => element.classList.add("gradient6"), 4000);
    },
    onIntersect7(entries) {
      const element = entries[0].target;

      element.classList.add(
        "animate__animated",
        "animate__backInLeft",
        "animate__slow"
      );

      element.addEventListener("animationend", () => {
        element.classList.remove(
          "animate__animated",
          "animate__backInLeft",
          "animate__slow"
        );
      });

      setTimeout(() => element.classList.add("gradient7"), 3000);
    },
    onIntersect8(entries) {
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
      setTimeout(() => element.classList.add("gradient8"), 4000);
    },
    onIntersect9(entries) {
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
  },
};
</script>
