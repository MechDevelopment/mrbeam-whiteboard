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
  },
  
  methods: {
    onResize() {
      console.log("Resize");
    }
  }
};
</script>
