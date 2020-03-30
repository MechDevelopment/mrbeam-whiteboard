import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    size: undefined,
    whiteboard: undefined
  },
  
  mutations: {
    updateSize: (state, size) => { state.size = size; },
    createWhiteboard: (state, whiteboard) => { state.whiteboard = whiteboard; }
  }
});
