import Vue from "vue";
import App from "./app.vue";
import iView from "iview";
import "iview/dist/styles/iview.css"; // 使用 CSS

let root = document.createElement("div");
document.body.appendChild(root);

Vue.use(iView);

new Vue({
  render: h => h(App)
}).$mount(root);
