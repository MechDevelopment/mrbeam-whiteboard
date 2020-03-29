<template>
  <canvas
    id="canvas"
    resize="true"
    style="background: #fdf1f3;"
    :style="canvas_size"
    v-on:mousedown.prevent="whiteboard.start"
    v-on:touchstart.prevent="whiteboard.start"
    v-on:mousemove.prevent="whiteboard.move"
    v-on:touchmove.prevent="whiteboard.move"
    v-on:mouseup.prevent="whiteboard.end"
    v-on:touchend.prevent="whiteboard.end"
    v-on:mouseenter.prevent="whiteboard.enter"
    v-on:mouseleave.prevent="whiteboard.leave"
    v-on:touchcancel.prevent="whiteboard.leave"
  ></canvas>
</template>

<script>
import { mapState } from "vuex";
import whiteboard from "../scripts/whiteboard"
export default {
  name: "Home",

  computed: {
    ...mapState(["size"])
  },

  data: () => ({
    whiteboard: whiteboard,
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
