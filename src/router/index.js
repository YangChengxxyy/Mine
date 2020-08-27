import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HelloWorld from "@/components/HelloWorld";
import Mine from "@/components/Mine";

const routes = [
    {path: '/HelloWorld', component: HelloWorld},
    {path: '/',component: Mine}
];
export default new Router({
    routes
})