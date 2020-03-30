<template>
  <v-app>
    <v-content
    v-resize="onResize"
      style="background: #110f0f"
      class="d-flex align-center"
    >
      <div v-resize="onResize" class="d-flex fill-height justify-center">
        <VCanvas />
        <VTools />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import VCanvas from "./components/v-canvas";
import VTools from "./components/v-tools";
import paper from "paper";

export default {
  name: "App",

  created() {
    paper.install(window);
    this.onResize();
  },

  methods: {
    onResize() {
      // Определение размера доски в зависимости от размера окна
      if (window.innerHeight < window.innerWidth) {
        this.$store.commit("updateSize", window.innerHeight - 5);
      } else {
        this.$store.commit("updateSize", window.innerWidth - 5);
      }

      this.$store.commit(
        "updateResizing",
        window.innerHeight + window.innerWidth
      );
    }
  },
  components: {
    VCanvas,
    VTools
  }
};
</script>

<style lang="sass">
#canvas
  background: white

html
  -ms-overflow-style: none
  scrollbar-width: none

::-webkit-scrollbar
  width: 0px
</style>
