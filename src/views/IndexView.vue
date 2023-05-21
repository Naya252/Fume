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
          <v-img
            v-if="$vuetify.breakpoint.xsOnly"
            position="center left"
            src="../assets/img/video.png"
            :height="windowSize.y"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          ></v-img>
          <video
            v-else
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
            Why us
          </h2>
        </div>

        <v-timeline
          class="mt-3 mx-6 my-8"
          :dense="$vuetify.breakpoint.smAndDown"
          v-intersect.once="onIntersectTimeLineDot"
        >
          <v-timeline-item
            v-for="item in timelineList"
            :key="item.id"
            :itemId="item.id"
            color="#e54617"
            large
          >
            <template v-slot:opposite>
              <span style="color: #fff">{{ item.info }}</span>
            </template>
            <v-card
              :itemId="item.id"
              v-intersect.once="onIntersectTimeLine"
              class="elevation-2"
              style="background: #4f5980; border-radius: 16px"
            >
              <v-card-title
                class="text-h5"
                style="
                  background: #4f5980;
                  color: #fff;
                  border-radius: 16px 16px 0 0;
                "
              >
                {{ item.title }}
              </v-card-title>
              <v-card-text
                style="background: #fff; min-height: 76px"
                class="pt-4"
              >
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
                  src="../assets/team/1.jpg"
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
                  src="../assets/team/6.jpg"
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
                  src="../assets/team/9.jpg"
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
                  src="../assets/team/11.jpg"
                  min-height="300px"
                  style="overflow: hidden"
                ></v-img>
              </v-card>
            </div>

            <!-- <div
              style="
                position: absolute;
                top: 250px;
                left: 450px;
                border-radius: 16px;
                overflow: auto;
                z-index: 4;
              "
            >
              <v-card class="mx-auto" max-width="400">
                <v-img src="../assets/team/12.jpg" max-height="300px"></v-img>
              </v-card>
            </div> -->
          </div>
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
    onIntersectTimeLine(entries) {
      const element = entries[0].target;

      let side = element.getAttribute("itemId");

      if (+side % 2 == 0) {
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

.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item:nth-child(odd):not(.v-timeline-item--before)
  .v-timeline-item__body
  > .v-card:not(.v-card--link)::before,
.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item:nth-child(odd):not(.v-timeline-item--before)
  .v-timeline-item__body
  > .v-card::after,
.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item--after
  .v-timeline-item__body
  > .v-card:not(.v-card--link)::before,
.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item--after
  .v-timeline-item__body
  > .v-card::after,
.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item:nth-child(even):not(.v-timeline-item--after)
  .v-timeline-item__body
  > .v-card:not(.v-card--link)::before,
.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item:nth-child(even):not(.v-timeline-item--after)
  .v-timeline-item__body
  > .v-card::after,
.v-application--is-ltr
  .v-timeline--dense
  .v-timeline-item
  .v-timeline-item__body
  > .v-card::after {
  display: none !important;
}
</style>
