// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// 入口文件为 src/App.vue 文件 所以要引用
import App from './App.vue';

// 引用路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 引用路由配置文件
import routes from './config/routes';
// 使用配置文件规则
const router = new VueRouter({
	routes
});

// 引用vuex
import Vuex from 'vuex';
Vue.use(Vuex);
// 使用配置文件规则
import stores from './config/stores';
const store = new Vuex.Store(
	stores
);

// 引用了$http
import VueResource from 'vue-resource';
Vue.use(VueResource);
// Vue.http.options.emulateJSON = true;
// Vue.http.options.credientials = true;
// Vue.http.options.crossDomain = true;
// Vue.http.options.emulateHTTP = true;

//	引用了mintUI库
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);
// import { Loadmore } from 'mint-ui';
// 	Vue.component(Loadmore.name, Loadmore);
// import { Indicator , InfiniteScroll } from 'mint-ui';
// Vue.use(Indicator , InfiniteScroll);
// 引用公用方法
import api from './config/api';
Vue.prototype.loadmore = api.loadmore;
//	ajax方法封装
Vue.prototype.$get = api.get;
Vue.prototype.$post = api.post;
Vue.prototype.$put = api.put;
Vue.prototype.$delete = api.delete;
/*	eslint-disable no-new	*/
new Vue({
	router,
	store,
	el: '#app',
	render: (h) => h(App)
});
