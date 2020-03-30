<template>
  <div>
    <!-- LEFT -->
    <div class="tools" :style="left_style">
      <v-btn @click.prevent="clickPen" :color="color_pen" large icon>
        <v-icon>mdi-pen</v-icon>
      </v-btn>
      <v-btn @click.prevent="clickEraser" :color="color_eraser" large icon>
        <v-icon>mdi-eraser</v-icon>
      </v-btn>
    </div>

    <!-- RIGHT -->
    <div class="tools" :style="right_style">
      <v-btn @click.prevent="clickUpload" color="#110f0f" large icon>
        <v-icon>mdi-upload</v-icon>
      </v-btn>
      <v-btn @click.prevent="clickClear" color="#110f0f" large icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["size", "whiteboard"])
  },

  data: () => ({
    color_pen: "#110f0f",
    color_eraser: "none",
    left_style: undefined,
    right_style: undefined
  }),

  created() {
    this.onResize();
  },

  watch: {
    size(value) {
      this.onResize();
    }
  },

  methods: {
    onResize() {
      const left = (window.innerWidth - this.size) / 2 + 5;
      const bottom = (window.innerHeight - this.size) / 2 + 5;
      this.left_style = `left: ${left}px; ` + `bottom: ${bottom}px; `;
      this.right_style = `right: ${left}px; ` + `bottom: ${bottom}px; `;
    },

    clickPen() {
      this.color_pen = "#110f0f";
      this.color_eraser = "none";
      this.whiteboard.setTool("pen");
    },

    clickEraser() {
      this.color_pen = "none";
      this.color_eraser = "#110f0f";
      this.whiteboard.setTool("eraser");
    },

    clickUpload() {},

    clickClear() {
      this.whiteboard.clear();
    }
  }
};
</script>

<style lang="sass">
.tools
  position: absolute
</style>
