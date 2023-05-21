<template dark>
  <v-container
    v-resize="onResize"
    column
    justify-center
    align-center
    fluid
    class="pa-0"
    style="height: 100%"
  >
    <div :style="`height: ${windowSize.y}px; position: relative`" id="section0">
      <div class="introT my-auto" style="height: 100%; width: 100vw">
        <div class="videoPly" style="width: 100vw">
          <video
            style="width: 100vw"
            class="videoMedia"
            src="../assets/video/first2.mp4"
            autoplay
            muted
            loop
            playsinline
            poster="../assets/img/video.png"
          ></video>
        </div>
        <div class="introT__content py-auto" style="height: 100%">
          <div
            style="
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
            "
          >
            <v-row class="ma-0">
              <v-col cols="12" style="display: flex; align-items: center">
                <div class="introT__container mx-auto">
                  <h1
                    class="intro__title mb-0 noBreak"
                    style="
                      line-height: 120%;
                      text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.55);
                    "
                    :style="
                      $vuetify.breakpoint.mdAndUp
                        ? 'font-size: 10rem'
                        : $vuetify.breakpoint.smOnly
                        ? 'font-size: 8rem'
                        : 'font-size: 5rem'
                    "
                  >
                    <span style="color: #e54617">F</span>ume
                  </h1>
                  <p
                    class="intro__text noBreak mb-0 mt-6"
                    style="
                      line-height: 120%;
                      text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
                    "
                    :style="
                      $vuetify.breakpoint.mdAndUp
                        ? 'font-size: 1.5rem'
                        : $vuetify.breakpoint.smOnly
                        ? 'font-size: 1.3rem'
                        : 'font-size: 1rem'
                    "
                  >
                    Elevate Every Moment with Custom Fragrances!
                  </p>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>

    <div
      :style="`min-height: ${windowSize.y}px; position: relative`"
      style="background: #f6e0d3"
      id="section1"
      class="section d-flex"
    >
      <div
        class="section_content"
        :class="
          $vuetify.breakpoint.mdAndUp
            ? 'px-6'
            : $vuetify.breakpoint.smOnly
            ? 'px-4'
            : 'px-2'
        "
      >
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
      </div>
    </div>

    <div
      :style="`min-height: ${windowSize.y}px; position: relative`"
      id="section2"
      style="background: #272c36"
      class="section d-flex"
    >
      <div
        class="section_content"
        :class="
          $vuetify.breakpoint.mdAndUp
            ? 'px-6'
            : $vuetify.breakpoint.smOnly
            ? 'px-4'
            : 'px-2'
        "
      >
        <div class="mx-2">
          <h2
            class="py-8"
            style="color: #fff"
            :style="
              $vuetify.breakpoint.mdAndUp
                ? 'font-size: 2rem'
                : $vuetify.breakpoint.smOnly
                ? 'font-size: 1.6rem'
                : 'font-size: 1.4rem'
            "
          >
            Почему Мы
          </h2>
        </div>

        <v-timeline
          class="mt-3 mx-6 my-8"
          :dense="$vuetify.breakpoint.smAndDown"
        >
          <v-timeline-item
            v-for="item in timelineList"
            :key="item.id"
            color="#e54617"
            large
          >
            <template v-slot:opposite>
              <span style="color: #fff">{{ item.info }}</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title
                class="text-h5"
                style="background: #4f5980; color: #fff"
              >
                {{ item.title }}
              </v-card-title>
              <v-card-text>
                {{ item.text }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
    </div>

    <div
      :style="`min-height: calc(${windowSize.y}px - 112px); position: relative`"
      id="section3"
      style="background: #f6e0d3"
      class="section d-flex"
    >
      <div
        class="section_content"
        :class="
          $vuetify.breakpoint.mdAndUp
            ? 'px-6'
            : $vuetify.breakpoint.smOnly
            ? 'px-4'
            : 'px-2'
        "
      >
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
            3
          </h2>
        </div>
      </div>
    </div>

    <FooterComponent />
  </v-container>
</template>

<script>
import CommonCard from "../components/CommonCard";
import FooterComponent from "../components/FooterComponent";
export default {
  name: "IndexView",

  components: {
    CommonCard,
    FooterComponent,
  },

  data: () => ({
    loading: false,
    windowSize: {
      x: 0,
      y: 0,
    },
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
    timelineList: [
      {
        id: 1,
        title: "We are pioneers",
        text: "В Узбекистане нет ни одной компании, которая может предложить подобные услуги. Вы не сможете найти столь же интересные и эксклюзивные предложения у кого-то другого.",
      },
      {
        id: 2,
        title: "Аромабрендинг",
        text: "Мы подберем аромат, который станет визитной карточкой вашего Бизнеса",
      },
      {
        id: 3,
        title: "Аромамаркетинг",
        text: "Использование приятных и знакомых ароматов в бизнесе с целью благоприятного воздействия на человека",
      },
      {
        id: 4,
        title: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
        info: "Tus eu perfecto",
      },
    ],
  }),
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
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
.introT {
  overflow: visible;
}

.introT:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100%;
  // height: 100vh;
}

.videoPly {
  -ms-flex-align: center;
  align-items: center;
  background: linear-gradient(to top, #525252, #333);
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  // height: calc(100vh);
  min-height: 300px;
  // margin-top: 65px;
  // max-height: calc(100vh);
  overflow: hidden;
  position: relative;
  width: 100%;

  background-position: center;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: 50% 50%;
  object-position: 50% 50%;
  -webkit-filter: blur(0);
  filter: blur(0);
  height: 100%;
  transition: -webkit-filter 0.35s ease-in-out;
  transition: filter 0.35s ease-in-out;
  transition: filter 0.35s ease-in-out, -webkit-filter 0.35s ease-in-out;
  width: 100%;
}

.videoPly {
  // height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.videoMedia {
  display: block;
  overflow: hidden;
}

@supports (object-fit: cover) {
  .videoMedia {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
}

.introT__content {
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  // height: 100vh;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 3;
}

.introT__container {
  text-align: center;
  max-width: 320px;
}

@media screen and (min-width: 768px) {
  .introT__container {
    max-width: 600px;
  }
}

.intro__title {
  font-size: 2em;
}
.intro__text {
  font-size: 1em;
  line-height: 90%;
}

@media screen and (min-width: 768px) {
  .intro__title {
    font-size: 6em;
  }
  .intro__text {
    font-size: 1.5em;
    line-height: 90%;
  }
}

.section {
  .section_content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
}

#section0 {
  user-select: none;
}

ul {
  width: 100%;
  max-width: 800px;
  margin: 32px auto;
}

li::marker {
  font-size: 2rem;
}
</style>
