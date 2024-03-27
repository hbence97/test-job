import { createApp } from "vue"

import App from "./App.vue"
import PageHeader from "./components/PageHeader.vue"
import Navbar from "./components/Navbar.vue"
import UserProfile from "./components/UserProfile.vue"
import InboxPage from "./components/InboxPage.vue"
import Banner from "./components/Banner.vue"
import NewFeatures from "./components/NewFeatures.vue"

const app = createApp(App);

app.component("nav-bar", Navbar);
app.component("page-header", PageHeader);
app.component("user-profile", UserProfile);
app.component("inbox-page", InboxPage);
app.component("banner", Banner);
app.component("new-features", NewFeatures);

app.mount("#app");
