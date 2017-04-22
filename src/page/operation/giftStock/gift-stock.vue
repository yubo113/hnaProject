<template>
	<div>
		<div class="row bg-white pl-10 pr-10">
			<div class="fl width-6 common-tab tc textOverflow" :class="{'common-tab-selected': openIndexHead === index}" v-for="(item, index) in headerTab" :key="index" @click="openHeadTab(index)">
				<span>{{ item.text }}</span>
			</div>
		</div>
		<giftStockApp v-if="openIndexHead === 0"></giftStockApp>
		<giftStockHis v-if="openIndexHead === 1"></giftStockHis>
	</div>
</template>

<script>
	import giftStockApp from './giftStockTab/gift-stock-app';
	import giftStockHis from './giftStockTab/gift-stock-his';
	export default {
		components: { 'giftStockApp': giftStockApp, 'giftStockHis': giftStockHis },
		data () {
			return {
				//	头部tab详细信息
				headerTab: [{
					text: '审批内容'
				}, {
					text: '审批历史'
				}],
				openIndexHead: 0,									//	头部点击标识
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
			this.$store.commit('changeTitle', '礼品采购');
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
				// this.$router.push({name: 'giftStock'});
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
