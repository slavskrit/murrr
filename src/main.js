import { createApp } from "vue";
import App from "./App.vue";
import VueGapi from "vue-gapi";

const app = createApp(App);

app.use(VueGapi, {
  apiKey: "AIzaSyDuZfn5e6Hst028bAMneKqq4Nkrfm96Lno",
  clientId:
    "276057855149-e8b5378r1ji77pd4ki8mqlsrdr2o19q6.apps.googleusercontent.com",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  scope: "https://www.googleapis.com/auth/spreadsheets"
});

// Vue.config.productionTip = false;

app.mount("#app");
