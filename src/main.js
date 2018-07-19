import "@babel/polyfill";
import "./plugins/vuetify";
import Vue from "vue";

import router from "./router/index.js"

import App from "./App.vue";


new Vue({
	el: "#app",
	router: router,
	render: function(createElement) {
		return createElement(App);
	}
});
