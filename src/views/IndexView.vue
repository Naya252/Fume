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
      v-for="section in sections"
      :key="section.id"
      :style="`min-height: ${windowSize.y}px; position: relative; background: ${section.bg}`"
      :id="`section${section.id}`"
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
        <component :is="section.component" />
      </div>
    </div>

    <FooterComponent />
  </v-container>
</template>

<script>
import SectionOne from "../components/SectionOne.vue";
import SectionTwo from "../components/SectionTwo.vue";
import SectionThree from "../components/SectionThree.vue";
import FooterComponent from "../components/FooterComponent";
export default {
  name: "IndexView",

  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    FooterComponent,
  },

  data: () => ({
    loading: false,
    windowSize: {
      x: 0,
      y: 0,
    },
    sections: [
      { id: 1, component: "SectionOne", bg: "#f6e0d3" },
      { id: 2, component: "SectionTwo", bg: "#272c36" },
      { id: 3, component: "SectionThree", bg: "#f6e0d3" },
    ],
  }),
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
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
}

.videoPly {
  -ms-flex-align: center;
  align-items: center;
  background: linear-gradient(to top, #525252, #333);
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  min-height: 300px;
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
</style>
