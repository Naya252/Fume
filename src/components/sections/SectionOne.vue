<template>
  <div class="mx-2">
    <CommonTitle>Elevate your business with fragrant odors!</CommonTitle>

    <v-row class="ma-0">
      <v-col
        v-for="card in marketingCards"
        :key="card.id"
        class="col-12 col-sm-6 col-md-3"
      >
        <CommonCard :item="card" />
      </v-col>

      <ul class="mb-14 pr-3 pl-12">
        <li
          v-intersect.once="onIntersect"
          v-for="li in marketingList"
          :key="li"
          style="color: #e54617"
          class="pa-4"
        >
          <span
            style="color: rgba(0, 0, 0, 0.87)"
            :style="
              $vuetify.breakpoint.smOnly
                ? 'font-size: 0.9rem'
                : 'font-size: 1.3rem'
            "
            >{{ li }}</span
          >
        </li>
      </ul>
    </v-row>
  </div>
</template>

<script>
import CommonCard from "../CommonCard";
import CommonTitle from "../CommonTitle";
export default {
  name: "SectionOne",
  components: {
    CommonCard,
    CommonTitle,
  },

  data: () => ({
    marketingCards: [
      {
        id: 0,
        text: "Increase awareness of your brand",
        img: require("../../assets/img/card1.jpg"),
      },
      {
        id: 1,
        text: "Reduce stress and anxiety in your workplace",
        img: require("../../assets/img/card2.jpg"),
      },
      {
        id: 2,
        text: "Escalate your sales",
        img: require("../../assets/img/card3.jpg"),
      },
      {
        id: 3,
        text: "Enhance customer service",
        img: require("../../assets/img/card4.jpg"),
      },
    ],
    marketingList: [
      "Scents affect on a subconscious level. They directly influence the part of brain which is responsible for emotions, desires and mood",
      "A person can remember more than 10 000 odors. And they are stored in a memory for 40 times more than sounds and visual images",
      "Fragrances express various feelings. With the help of aromas, you can remind about  your business and attract clients",
    ],
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
ul {
  width: 100%;
  max-width: 800px;
  margin: 32px auto;
}

li::marker {
  font-size: 1.7rem;
}
</style>
