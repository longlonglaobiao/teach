import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./app.vue";

Vue.use(ElementUI);

let root = document.createElement("div");
document.body.appendChild(root);

let app = new Vue({
  render: (h) => h(App),
}).$mount(root);
