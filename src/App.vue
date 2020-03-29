<template>
  <v-app>
    <div v-resize="onResize" class="fill-height">
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
      this.$store.commit("updateSize", window.innerHeight);
    }
  }
};
</script>
