<template>
	<div class="layer overflow" v-bind:class="{ 'layerShow': active, 'layerHide': !active }">
		<div class="sider span-8 fl bg-black">
			<div class="siderTitle bg-monitor pl-50 page-head">
				<div class="inner-center">
					<img class="siderTitleImg inline" src="static/img/csr/monitor.png" @click="enterIndex"/>
					<span class="text-white inline" @click="enterIndex">核心数据监控</span>
				</div>
			</div>
			<div class="text-white menuHeight" >
			<div>
				<div class="menuList pl-10" v-for="(group , index) in groupList" :key="index" :class="{'bg-monitor': openIndex === index}">
					<div class="row" @click="showList(index, group.router)">
						<span class="fl"><i class="fa fa-th-large" aria-hidden="true"></i></span>
						<span class="fl pl-20 span-8 textOverflow">{{ group.name }}</span>
						<span class="fr pr-20"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
					</div>
					<div class="pl-40">
						<ul v-show="openIndex === index" class="list-detail">
			                <li class="content" v-for="(con , index) in group.content" :key="index" @click="">
				                <a class="text-white" href="javascript:;;">
			                    	{{index}}.{{con.name}}
				                </a>
			                </li>
			            	<!-- <li class="" v-if=""> 
				                <a class="text-white" href="javascript:;;">
			                    	列表正在加载中...
				                </a>
			                </li> -->
			            </ul>
		            </div>
				</div>
			</div>
			</div>
		</div>
		<div class="mask span-2 fl" @click="hideSider">
			
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				title: '兜兜开发平台',
				openIndex: 0,
				groupList: [{
					name: '品牌资源使用情况',
					router: '/index/monitorData/brandSource',
					content: []
				}]
			};
		},
		computed: {
			active: function () {
				return this.$store.state.status;
			}
		},
		methods: {
			/*
			 *	隐藏菜单
			 */
			hideSider: function () {
				this.$store.commit('sideStatus');
			},
			/*	展示相应选择样式(展示二级子菜单)
			 *	index: 当前的index, router: 当前的路由
			 *	跳转到相应的页面
			 */
			showList: function (index, router) {
				this.openIndex = index;
				this.enterItem(router);
			},
			/*	隐藏菜单
			 *	router: 当前的路由
			 *	进入相应的页面
			 */
			enterItem: function (router) {
				this.hideSider();
				this.$router.replace(router);
			},
			/*
			 *	隐藏菜单,进入主页
			 */
			enterIndex: function () {
				this.hideSider();
				this.$router.push({name: 'index'});
			}
		}
	};
</script>
