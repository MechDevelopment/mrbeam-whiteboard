<template>
  <canvas
    id="canvas"
    resize="true"
    style="background: lightblue;"
    :style="canvas_size"
    v-on:mousedown.prevent="onStart"
    v-on:touchstart.prevent="onStart"
    v-on:mousemove.prevent="onMove"
    v-on:touchmove.prevent="onMove"
    v-on:mouseup.prevent="onEnd"
    v-on:touchend.prevent="onEnd"
    v-on:mouseenter.prevent="onEnter"
    v-on:mouseleave.prevent="onLeave"
    v-on:touchcancel.prevent="onLeave"
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
  },

  methods: {
    onStart(event) {
      console.log(event);
    },
    
    onMove(event) {
      //console.log(event);
    },

    onEnd(event) {
      console.log(event);
    },

    onEnter(event) {
      console.log("Enter")
    },

    onLeave(event) {
      console.log("Out")
    }
  }
};
</script>
