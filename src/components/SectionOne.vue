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
      Elevate your business with fragrant odors!
    </h2>
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
          <span style="color: rgba(0, 0, 0, 0.87); font-size: 1.3rem">{{
            li
          }}</span>
        </li>
      </ul>
    </v-row>
  </div>
</template>

<script>
import CommonCard from "./CommonCard";
export default {
  name: "SectionOne",
  components: {
    CommonCard,
  },
  props: {},
  data: () => ({
    marketingCards: [
      {
        id: 0,
        text: "Increase awareness of your brand",
        img: "https://img.freepik.com/premium-photo/abstract-blue-outer-space-science-background-vibrant-colors-galaxy-sky-ocean-sea-mystical-liquid-chemicals-smoke-chemistry-and-biology-creative-backdrop-paper_154092-14077.jpg?w=826",
      },
      {
        id: 1,
        text: "Reduce stress and anxiety in your workplace",
        img: "https://img.freepik.com/free-photo/closeup-shot-of-a-beautiful-small-river-running-through-rocks-and-debris-in-a-forest_181624-3744.jpg?w=360&t=st=1684650315~exp=1684650915~hmac=0e9a8ff8b11085a4f3e7782483ad0cad5fc8b099b8334fd227f3f8ef431f25f0",
      },
      {
        id: 2,
        text: "Escalate your sales",
        img: "https://img.freepik.com/premium-photo/boiling-water-splash-with-steam-on-black-background_213438-1170.jpg?w=740",
      },
      {
        id: 3,
        text: "Enhance customer service",
        img: "https://img.freepik.com/free-photo/abstract-heavy-blue-haze-in-dark-liquid_23-2148102012.jpg",
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
