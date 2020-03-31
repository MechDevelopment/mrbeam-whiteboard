<template>
  <div>
    <!-- BOTTOM LEFT -->
    <div class="tools ml-2" :style="left_style">
      <v-btn @click.prevent="clickPen" :color="color_pen" large icon>
        <v-icon>mdi-pen</v-icon>
      </v-btn>
      <v-btn @click.prevent="clickEraser" :color="color_eraser" large icon>
        <v-icon>mdi-eraser</v-icon>
      </v-btn>
    </div>

    <!-- BOTTOM RIGHT -->
    <div class="tools mr-3 mb-1" :style="right_style">
      <v-btn @click.prevent="clickUpload" class="pa-1" text :loading="loading">
        Analyze<v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>

    <!-- TOP LEFT -->
    <div class="tools ml-2" :style="top_left_style">
      <p class="message">{{ this.message }}</p>
    </div>

    <!-- TOP RIGHT -->
    <div class="tools" :style="top_right_style">
      <v-btn @click.prevent="clickClear" class="ml-4" small icon>
        <v-icon small>mdi-close-circle</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const BLACK = "#111010";

export default {
  computed: {
    ...mapState(["size", "resizing", "whiteboard"])
  },

  data: () => ({
    loading: false,
    message: "",
    color_pen: BLACK,
    color_eraser: "none",
    top_left_style: undefined,
    top_right_style: undefined,
    left_style: undefined,
    right_style: undefined
  }),

  created() {
    this.onResize();
  },

  watch: {
    resizing() {
      this.onResize();
    }
  },

  methods: {
    onResize() {
      const left = (window.innerWidth - this.size) / 2 + 5;
      const bottom = (window.innerHeight - this.size) / 2 + 5;
      this.top_left_style = `left: ${left}px; ` + `top: ${bottom}px; `;
      this.top_right_style = `right: ${left}px; ` + `top: ${bottom}px; `;
      this.left_style = `left: ${left}px; ` + `bottom: ${bottom}px; `;
      this.right_style = `right: ${left}px; ` + `bottom: ${bottom}px; `;
    },

    clickPen() {
      this.color_pen = BLACK;
      this.color_eraser = "none";
      this.whiteboard.setTool("pen");
    },

    clickEraser() {
      this.color_pen = "none";
      this.color_eraser = BLACK;
      this.whiteboard.setTool("eraser");
    },

    clickClear() {
      this.whiteboard.clear();
    },

    async clickUpload() {
      this.loading = true;
      const canvasElem = document.getElementById("canvas");
      const body = canvasElem.toDataURL();
   
      await fetch("https://mrbeam-neural.herokuapp.com/predict", {
        method: "post",
        body:  JSON.stringify({data: body})
      })
        .then(data => data.json())
        .then(data => {
          setTimeout(() => {
            console.log(data, body);
            this.loading = false;
            if (data.status === 404) {
              this.createMessage("Address not found.");
            }
          });
        });
    },

    createMessage(value) {
      this.message = value;
      setTimeout(() => {
        this.message = "";
      }, 6000);
    }
  }
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Baloo+2&display=swap')

.message
  font-family: 'Baloo 2', cursive
  font-size: 18px

.tools
  position: absolute
</style>
