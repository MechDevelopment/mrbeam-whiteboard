import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    size: undefined,
    resizing: undefined,
    whiteboard: undefined,
    cursor_style: "cursor: url('https://api.iconify.design/mdi-pen.svg?height=26') 1 25, pointer"
  },
  
  mutations: {
    updateSize: (state, size) => { state.size = size; },
    updateResizing: (state, resizing) => { state.resizing = resizing; },
    createWhiteboard: (state, whiteboard) => { state.whiteboard = whiteboard; },
    updateCursorStyle: (state, cursor_style) => { state.cursor_style = cursor_style; }
  }
});
