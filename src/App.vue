<template>
  <v-app>
    <div v-resize="onResize" class="d-flex fill-height justify-center align-center">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import paper from "paper";

export default {
  name: "App",

  created() {
    paper.install(window);
    this.onResize()
  },

  methods: {
    onResize() {
      // Определение размера доски в зависимости от размера окна
      if (window.innerHeight < window.innerWidth) {
        this.$store.commit("updateSize", window.innerHeight);
      } else {
        this.$store.commit("updateSize", window.innerWidth);
      }
    }
  }
};
</script>
