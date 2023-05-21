<template>
  <v-app light>
    <!-- Header -->
    <v-app-bar :clipped-left="clipped" fixed app dark>
      <v-toolbar-title class="pl-0 pl-sm-2">
        <MainLogo alt="Fume" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp" class="ml-8">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          text
          @click="
            $vuetify.goTo(`#section${item.to}`, {
              duration: 300,
              offset: 0,
              easing: 'easeInOutCubic',
            })
          "
        >
          <div color="#fff" class="">{{ item.title }}</div>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main light>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .v-app-bar--is-scrolled {
    opacity: 0.85 !important;
    backdrop-filter: blur(6px);
  }
}

html {
  overflow-y: auto !important;
  ::-webkit-scrollbar {
    width: 8px !important;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #272727;
  }

  ::-webkit-scrollbar-thumb {
    background: #ab3613;
    transition: 0.3s all ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #bd3c14;
  }
}

body {
  box-sizing: border-box;
}

.v-application a {
  text-decoration: none !important;
}
</style>

<script>
import MainLogo from "@/components/MainLogo.vue";

export default {
  name: "App",

  data: () => ({
    clipped: false,
    fixed: false,

    menuItems: [
      {
        title: "Aroma & business",
        to: "1",
      },
      {
        title: "Why Fume?",
        to: "2",
      },
      {
        title: "3",
        to: "3",
      },
    ],
  }),
  components: {
    MainLogo,
  },
  methods: {},
  mounted() {},
};
</script>
