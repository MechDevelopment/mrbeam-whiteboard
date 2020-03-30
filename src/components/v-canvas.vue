<template>
  <canvas
    id="canvas"
    class="sketchy"
    resize="true"
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
import Whiteboard from "../scripts/whiteboard";
export default {
  computed: {
    ...mapState(["size", "whiteboard"])
  },

  data: () => ({
    canvas_size: undefined,
    last_size: 0
  }),

  created() {
    this.onResize();
  },

  mounted() {
    this.last = this.size;
    this.$store.commit("createWhiteboard", new Whiteboard());
  },

  watch: {
    size(value) {
      this.onResize();
    }
  },

  methods: {
    onResize() {
      this.canvas_size = `height: ${this.size}px; width: ${this.size}px`;

      this.whiteboard.resize(this.size, this.last)
      this.last = this.size;
    }
  }
};
</script>
