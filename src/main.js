import { createApp } from "vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
