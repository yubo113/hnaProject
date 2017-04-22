<template>
	<div>
		<div class="iscroll">
			<div id="wrapper">
				<div id="scroller">
					<div class="pull-down" data-type="all">
						下拉刷新
					</div>
					<div v-if="projectList.length === 0">
						<div class="ad-source bg-white pt-10 mb-10 font2">
							<div class="mb-10">
				    			<span class="text-light-grey span-3 inline tr">礼品类型</span>
				    			<span class="span-6 textOverflow inline app-report-text">链接链接</span>
				    		</div>
				    		<div class="mb-10">
				    			<span class="text-light-grey span-3 inline tr">礼品名称</span>
				    			<span class="span-6 textOverflow inline app-report-text">链接链接</span>
				    		</div>
				    		<div class="mb-10">
				    			<span class="text-light-grey span-3 inline tr vertical-top">规格</span>
				    			<span class="span-6 inline app-report-text vertical-top">链接链链接</span>
				    		</div>
				    		<div class="mb-10">
				    			<span class="text-light-grey span-3 inline tr vertical-top">礼品单位</span>
				    			<span class="span-6 inline app-report-text vertical-top">链接接</span>
				    		</div>
				    		<div class="mb-10">
				    			<span class="text-light-grey span-3 inline tr vertical-top">单价(元)</span>
				    			<span class="span-6 inline app-report-text vertical-top">东方饭店三国杀分割独山</span>
				    		</div>
				    		<div class="mb-10">
				    			<span class="text-light-grey span-3 inline tr vertical-top">采购数量</span>
				    			<span class="span-6 inline app-report-text vertical-top">链接</span>
				    		</div>
				    		<div class="mb-10">
				    			<span class="text-light-grey span-3 inline tr vertical-top">总价(元)</span>
				    			<span class="span-6 inline app-report-text vertical-top">链接链链接</span>
				    		</div>
				    		<div class="mb-10">
				    			<span class="text-light-grey span-3 inline tr vertical-top">供应商</span>
				    			<span class="span-6 inline app-report-text vertical-top">链接接链接</span>
				    		</div>
				    		<div class="mb-10">
				    			<span class="text-light-grey span-3 inline tr vertical-top">对接人</span>
				    			<span class="span-6 inline app-report-text vertical-top">链接链接接</span>
				    		</div>
				    		<div class="mb-10">
				    			<span class="text-light-grey span-3 inline tr">联系方式</span>
				    			<span class="span-6 textOverflow inline app-report-text">链接链接</span>
				    		</div>
				    		<div class="mb-10">
				    			<span class="text-light-grey span-3 inline tr">收货人名称</span>
				    			<span class="span-6 textOverflow inline app-report-text">链接链接</span>
				    		</div>
				    		<div class="mb-10">
				    			<span class="text-light-grey span-3 inline tr">收货人名地址</span>
				    			<span class="span-6 textOverflow inline app-report-text">链接链接</span>
				    		</div>
				    		<div class="mb-10">
				    			<span class="text-light-grey span-3 inline tr">采购说明</span>
				    			<span class="span-6 textOverflow inline app-report-text">链接链接</span>
				    		</div>
						</div>
				    </div>
				    <div v-else>
				    	<nodata :nodata="nodata" :refresh="projectSearch" :type="types"></nodata>
				    </div>
				</div>
			</div>
		</div>
		<div class="check-more text-white row tc">
			<span class="check-button mr-40 bg-green pl-50 pr-50">同意</span>
			<span class="check-button pl-50 pr-50">拒绝</span>
		</div>
	</div>
</template>

<script>
	import nodata from '../../../../components/nodata.vue';
	export default {
		components: { 'nodata': nodata },
		data () {
			return {
				fangTest: true,
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
				giftAppIscroll: '',
				giftIscroll: '',
				isPullDown: false,
				types: true,
				searchName: '',
				nodata: '暂无数据',
				pageCount: 1
			};
		},
		created () {
			this.$store.commit('changeTitle', '礼品采购');
			// this.$store.commit('loadingShow');
			this.$store.commit('loadingHide');
			// this.getMediaInfo();
		},
		watch: {
		},
		methods: {
			//	进入审批报告
			enterApp: function (people, item) {
				people.projectName = item.projectName;
				if (people.thisStatus === '2') {
					this.$router.push({name: 'mediaDetail', query: people});
				} else {
					this.$router.push({name: 'mediaDetail', query: people});
				}
			},
			getMediaInfo: function (name) {
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/csrReport/list',
					params: {
						projectName: name,
						pageSize: 6,
						pageNo: this.pageCount
					}
				}).then(res => {
				});
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
			//	刷新iscroll
			if (this.giftAppIscroll) {
				this.giftAppIscroll.refresh();
			}
		},
		mounted () {
			//	初始化整体iscroll距顶部高度
			this.initTop('#wrapper', '.iscroll');
			//	初始化整体iscroll实例
			this.giftAppIscroll = this.initIscroll('#wrapper');
			// this.loadmore(this.giftAppIscroll, this.pullRefresh, this.pullMore);
		},
		beforeDestroy () {
			this.giftAppIscroll.destroy();
			this.giftAppIscroll = null;
		}
	};
</script>
