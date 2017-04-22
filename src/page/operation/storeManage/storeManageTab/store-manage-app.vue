<template>
	<div class="csr-work" >
		<div class="ad-source bg-white pt-10 mb-10">
			<div class="mb-10">
    			<span class="text-light-grey span-3 inline tr">申请人</span>
    			<span class="span-6 textOverflow inline app-report-text">链接链接</span>
    		</div>
    		<div class="mb-10">
    			<span class="text-light-grey span-3 inline tr">申请时间</span>
    			<span class="span-6 textOverflow inline app-report-text">链接链接</span>
    		</div>
    		<div class="mb-10">
    			<span class="text-light-grey span-3 inline tr vertical-top">用途</span>
    			<span class="span-6 inline app-report-text vertical-top">链接链接链接链接链接链接链接链接链接链接链接链接链接链接链接链接链接链接链接链接</span>
    		</div>
		</div>
	    <div class="csrwork-iscroll">
			<div id="wrapper">
				<div id="scroller">
					<div class="pull-down" data-type="all">
						下拉刷新
					</div>
					<div v-if="projectList.length === 0">
						<!--轮播-->
						<div class="container-horizontal mt-10 mb-10 ml-10">
							<div class="wrapper-horizontal" id="fang">
								<div class="scroller-horizontal">
									<div v-for="(hTab, index) in tabList" :key="index" class="bg-white ad-source-detail scroller-item mr-10 pl-10">
										<div class="pt-10 pb-10 bg-grey row">
											<span class="fl">广告点位{{index+1}}</span>
											<div class="fr mr-20">
												<div class="text-white">
													<span class="ad-source-pass mr-10">通过</span>
													<span class="ad-source-fail">拒绝</span>
												</div>
											</div>
										</div>
						    			<div class="mb-10">
							    			<span class="text-light-grey span-3 inline tl">库存类别</span>
							    			<span class="span-6 textOverflow inline">链接链接</span>
							    		</div>
							    		<div class="mb-10">
							    			<span class="text-light-grey span-3 inline tl">库存名称</span>
							    			<span class="span-6 textOverflow inline">链接链接</span>
							    		</div>
							    		<div class="mb-10">
							    			<span class="text-light-grey span-3 inline tl">负责人</span>
							    			<span class="span-6 textOverflow inline">链接链接</span>
							    		</div>
							    		<div class="mb-10">
							    			<span class="text-light-grey span-3 inline tl">单位</span>
							    			<span class="span-6 textOverflow inline">链接链接</span>
							    		</div>
							    		<div class="mb-10">
							    			<span class="text-light-grey span-3 inline tl">库存数量</span>
							    			<span class="span-6 textOverflow inline">链接链接</span>
							    		</div>
							    		<div class="mb-10">
							    			<span class="text-light-grey span-3 inline tl">最低库存数量</span>
							    			<span class="span-6 textOverflow inline">链接链接</span>
							    		</div>
							    		<div class="mb-10">
							    			<span class="text-light-grey span-3 inline tl">出库数量</span>
							    			<span class="span-6 textOverflow inline">链接链接</span>
							    		</div>
									</div>
							    </div>
					    	</div>
					    </div>
					    <div class="filling-box"></div>
				    </div>
				    <div v-else>
				    	<nodata :nodata="nodata" :refresh="projectSearch" :type="types"></nodata>
				    </div>
				</div>
			</div>
		</div>
		<div class="check-more tc bg-red text-white ad-source-search" @click="">
			<span>提   交</span>
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
				storeAppIscroll: '',
				curIscroll: '',
				isPullDown: false,
				types: true,
				searchName: '',
				nodata: '暂无数据',
				pageCount: 1
			};
		},
		created () {
			this.$store.commit('changeTitle', '库存管理');
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
			if (this.curIscroll) {
				this.curIscroll.refresh();
			}
			if (this.storeAppIscroll) {
				this.storeAppIscroll.refresh();
			}
		},
		mounted () {
			//	初始化整体iscroll距顶部高度
			this.initTop('#wrapper', '.csrwork-iscroll');
			//	初始化横向iscroll,容器宽度,容器高度
			this.initConHeight('.container-horizontal', '.wrapper-horizontal', '.scroller-horizontal', '.scroller-item');
			//	初始化横向iscroll实例
			this.curIscroll = this.initHorIscroll('.wrapper-horizontal');
			//	初始化整体iscroll实例
			this.storeAppIscroll = this.initIscroll('#wrapper');
			// this.loadmore(this.storeAppIscroll, this.pullRefresh, this.pullMore);
		},
		beforeDestroy () {
			this.curIscroll.destroy();
			this.curIscroll = null;
			this.storeAppIscroll.destroy();
			this.storeAppIscroll = null;
		}
	};
</script>
