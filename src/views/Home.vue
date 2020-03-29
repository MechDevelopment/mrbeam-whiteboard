<template>
  <canvas
    id="canvas"
    resize="true"
    style="background: blue;"
    :style="canvas_size"
  ></canvas>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",

  computed: {
    ...mapState(["size"])
  },

  data: () => ({
    canvas_size: undefined
  }),

  created() {
    this.canvas_size = `height: ${this.size}px; width: ${this.size}px`;
  },

  watch: {
    size(value) {
      this.canvas_size = `height: ${value}px; width: ${value}px`;
    }
  }
};
</script>
