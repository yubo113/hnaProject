<template>
	<div class="csr-work" >
		<div class="row bg-white pl-10 pr-10">
			<div class="fl width-6 common-tab tc textOverflow" :class="{'common-tab-selected': openIndexHead === index}" v-for="(item, index) in headerTab" :key="index" @click="openHeadTab(index)">
				<span>{{ item.text }}</span>
			</div>
		</div>
		<adSourceApp v-if="openIndexHead === 0"></adSourceApp>
		<adSourceHis v-if="openIndexHead === 1"></adSourceHis>
	</div>
</template>

<script>
	import adSourceApp from './adSourceTab/ad-source-app';
	import adSourceHis from './adSourceTab/ad-source-his';
	export default {
		components: { 'adSourceApp': adSourceApp, 'adSourceHis': adSourceHis },
		data () {
			return {
				//	头部tab详细信息
				headerTab: [{
					text: '审批内容'
				}, {
					text: '审批历史'
				}],
				openIndexHead: 0,									//	头部点击标识
				tabList: [{
					text: '规划研究'
				}, {
					text: '公关传播'
				}, {
					text: '品牌建设'
				}, {
					text: '公益项目'
				}],
				projectList: [],
				curworkIscroll: '',
				curIscroll: '',
				isPullDown: false,
				types: true,
				searchName: '',
				nodata: '暂无数据',
				pageCount: 1
			};
		},
		created () {
			this.$store.commit('changeTitle', '广告资源审批');
			this.$store.commit('loadingHide');
		},
		watch: {
		},
		methods: {
			/*	点击切换当前页面tab
			 *	index: tab标识(从0开始)
			 */
			openHeadTab: function (index) {
				this.openIndexHead = index;
			},
			//	进入审批报告
			enterApp: function (people, item) {
				people.projectName = item.projectName;
				if (people.thisStatus === '2') {
					this.$router.push({name: 'mediaDetail', query: people});
				} else {
					this.$router.push({name: 'mediaDetail', query: people});
				}
			},
			//	下拉刷新
			pullRefresh: function () {
				this.pageCount = 1;
				return this.getCsrWork();
			},
			// 加载更多
			pullMore: function () {
				this.isPullDown = true;
				return this.getCsrWork();
			},
			//	搜索框
			projectSearch: function () {
				this.getCsrWork(this.searchName);
			}
		},
		updated () {
		},
		mounted () {
		},
		beforeDestroy () {
		}
	};
</script>
