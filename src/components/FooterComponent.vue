<template>
  <v-footer dark padless>
    <v-card
      color="#272727"
      class="flex flex-column-reverse flex-sm-row align-center"
      style="display: flex; margin: 0 auto"
      flat
      tile
      max-width="1920px"
    >
      <div style="display: inline-flex; color: #adadad" class="mx-4 my-4">
        &copy;{{ new Date().getFullYear() }} Fume
      </div>

      <v-spacer></v-spacer>

      <div style="display: inline-flex">
        <v-btn plain target="_blank" href="https://startupweekend.uz/">
          <LogoTechstars />
        </v-btn>
      </div>
    </v-card>
  </v-footer>
</template>

<script>
import LogoTechstars from "./logo/LogoTechstars";
export default {
  name: "FooterComponent",
  components: {
    LogoTechstars,
  },
};
</script>
