import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/index.js";
import { store } from "./store/index.js";
import BasePress from "./components/base/BasePress.vue";
import BaseCard from "./components/base/BaseCard.vue";
import BaseSection from "./components/base/BaseSection.vue";

const app = createApp(App);

app.component("base-section", BaseSection);
app.component("base-card", BaseCard);
app.component("base-press", BasePress);
app.use(store);
app.use(router);
router.isReady().then(() => app.mount("#app"));
