import Vue from "vue";
import VueRouter from "vue-router";


//COMPONENTS
import settingComponent from "../components/Settings.vue";
import profileComponent from "../components/Profile.vue";

//DEPENDENCIES
Vue.use(VueRouter);

//ROUTES
const routes = [
	{
		path: "/settings",
		component: settingComponent
	},
	{
		path: "/profile",
		component: profileComponent
	}
];

//ROUTER
const router = new VueRouter({
    routes: routes
})

export default router;