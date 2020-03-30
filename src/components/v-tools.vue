<template>
  <div>
    <div class="tools" :style="left_size">
      <v-btn left dark>1</v-btn>
      <v-btn left dark>2</v-btn>
    </div>
    <div class="tools" :style="right_size">
      <v-btn left dark>3</v-btn>
      <v-btn left dark>4</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["size"])
  },

  data: () => ({
    left_size: undefined,
    right_size: undefined
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
      this.left_size = `left: ${left}px; ` + `bottom: ${bottom}px; `;
      this.right_size = `right: ${left}px; ` + `bottom: ${bottom}px; `;
    }
  }
};
</script>

<style lang="sass">
.tools
  position: absolute
</style>
