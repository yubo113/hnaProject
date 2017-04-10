<template>
	<div class="layer overflow" v-bind:class="{ 'layerShow': active, 'layerHide': !active }">
		<div class="sider span-8 fl bg-black">
			<div class="siderTitle bg-orange pl-50 page-head">
				<div class="inner-center">
					<img class="siderTitleImg inline" src="static/img/csr/csrwork.png" @click="news()"/>
					<span class="text-white inline">CSR工作</span>
				</div>
			</div>
			<div class="text-white pl-10 menuHeight" >
			<div>
				<div class="menuList" v-for="(group , index) in groupList" :key="index">
					<div class="row" @click="showList(index)">
						<span class="fl">{{index}}.</span>
						<span class="fl pl-20 span-8 textOverflow">{{ group.name }}</span>
						<span class="fr pr-20"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
					</div>
					<div class="pl-40">
						<ul v-show="openIndex === index" class="list-detail">
			                <li class="content" v-for="(con , index) in group.content" :key="index" @click="enterItem">
				                <a class="text-white" href="javascript:;;">
			                    	{{index}}.{{con.name}}
				                </a>
			                </li>
			            	<li class="" v-if=""> 
				                <a class="text-white" href="javascript:;;">
			                    	列表正在加载中...
				                </a>
			                </li>
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
	// import { InfiniteScroll } from 'mint-ui';
	// import { Indicator } from 'mint-ui';
	export default {
		data () {
			return {
				title: '兜兜开发平台',
				openIndex: 0,
				groupList: [{
					name: 'CSR报告',
					content: [{
						name: 'erjisdghjgjgj'
					}, {
						name: 'erjisdghjgjgj'
					}, {
						name: 'erjisdghjgjgj'
					}]
				}, {
					name: 'CSR报告sdadsdCSR报告sdadsdCSR报告sdadsdCSR报告sdadsdCSR报告sdadsdCSR报告sdadsdCSR报告sdadsd',
					content: [{
						nam: 'erjisdghjgjgj'
					}, {
						name: 'erjisdghjgjgj'
					}, {
						name: 'erjisdghjgjgj'
					}]
				}, {
					name: 'CSR报告sdadsd',
					content: [{
						name: 'erjisdghjgjgj'
					}, {
						name: 'erjisdghjgjgj'
					}, {
						name: 'erjisdghjgjgj'
					}]
				}, {
					name: 'CSR报告sdadsd',
					content: [{
						name: 'erjisdghjgjgj'
					}, {
						name: 'erjisdghjgjgj'
					}, {
						name: 'erjisdghjgjgj'
					}]
				}, {
					name: 'CSR报告sdadsd',
					content: [{
						name: 'erjisdghjgjgj'
					}, {
						name: 'erjisdghjgjgj'
					}, {
						name: 'erjisdghjgjgj'
					}]
				}, {
					name: 'CSR报告sdadsd',
					content: [{
						name: 'erjisdghjgjgj'
					}, {
						name: 'erjisdghjgjgj'
					}, {
						name: 'erjisdghjgjgj'
					}]
				}, {
					name: 'CSR报告sdadsd',
					content: [{
						name: 'erjisdghjgjgj'
					}, {
						name: 'erjisdghjgjgj'
					}, {
						name: 'erjisdghjgjgj'
					}]
				}]
			};
		},
		created () {
			// console.log(InfiniteScroll);
			// Indicator.open();
		},
		computed: {
			active: function () {
				return this.$store.state.status;
			}
		},
		methods: {
				hideSider: function () {
				this.$store.commit('sideStatus');
				// document.querySelector('.layer').removeEventListener("touchmove", function(e){
				// 	console.log(111);
    //                 e.preventDefault();  //阻止默认行为
    //             });
			},
			loadMore: function () {
				this.loading = false;
					setTimeout(() => {
						// let last = this.list[this.list.length - 1];
						// for (let i = 1; i <= 10; i++) {
						//   this.list.push(last + i);
						// }
						this.loading = false;
				}, 0);
			},
			//	展示二级子菜单
			showList: function (index) {
				this.openIndex = index;
				// console.log(index)
			},
			//	进入相应的子菜单详情
			enterItem: function () {

			},
			news: function () {
				this.$router.push({name: 'newsSpokesmanTrain'});
			}
		}
	};
</script>
