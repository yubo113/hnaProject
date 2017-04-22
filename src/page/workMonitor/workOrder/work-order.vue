<template>
	<div class="work-order">
		<!--头部tab-->
		<div class="row bg-white pl-10 pr-10">
			<!-- <div class="fl width-3 header-tab tc textOverflow" :class="{'header-tab-selected': openIndexHead === index}" v-for="(item, index) in headerTab" :key="index" @click="openHeadTab(index)">v-tap="{ methods: openHeadTab , index : index}" -->
			<div class="fl width-3 header-tab tc textOverflow" :class="{'header-tab-selected': openIndexHead === index}" v-for="(item, index) in headerTab" :key="index" @click="openHeadTab(index)">
				<span>{{ item.text }}</span>
			</div> 
		</div>
		<!--内容-->
		<!--规划研究部分-->
		<planningResearch v-if="openIndexHead === 0"></planningResearch>
		<brandCenter v-if="openIndexHead === 1"></brandCenter>
	</div>
</template>

<script>
	import planningResearch from './planningResearch/planning-research.vue';
	import brandCenter from './brandCenter/brand-center.vue';
	export default {
		components: { 'planningResearch': planningResearch, 'brandCenter': brandCenter },
		data () {
			return {
				//	头部tab详细信息
				headerTab: [{
					text: '规划研究'
				}, {
					text: '公关传播'
				}, {
					text: '品牌建设'
				}, {
					text: '公益项目'
				}],
				openIndexHead: 0,									//	头部点击标识
				projectList: [],
				curworkIscroll: '',
				isPullDown: false,
				types: true,
				searchName: '',
				nodata: '暂无数据',
				pageCount: 1
			};
		},
		created () {
			this.$store.commit('changeTitle', '工作单');
			this.$store.commit('loadingHide');
			// this.$store.commit('loadingShow');
			// this.getMediaInfo();
		},
		watch: {
		},
		methods: {
			/*	点击切换当前页面tab
			 *	index: tab标识(从0开始)
			 */
			openHeadTab: function (index) {
				// console.log(index);
				// this.openIndexHead = index.index;
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
			getMediaInfo: function (name) {
				const self = this;
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/csrReport/list',
					params: {
						projectName: name,
						pageSize: 6,
						pageNo: this.pageCount
					}
				}).then(res => {
					const preventResult = self.projectList.length;
					//	当成功返回数据
					if (res.result) {
						console.log(res);
						//	当数据成功并且有数据时候执行
						if (res.data && res.data.csrReportList && res.data.csrReportList.length > 0) {
							//	判断数据是否是上拉加载还是刷新
							if (self.isPullDown) {
								self.projectList = self.projectList.concat(res.data.csrReportList);
								self.isPullDown = false;
							} else {
								self.projectList = res.data.csrReportList;
							}
							this.pageCount += 1;
						} else {
							self.projectList = [];
							this.nodata = '暂无数据';
							this.types = true;
						}
						this.$store.commit('loadingHide');
					} else {
						//	当返回数据失败时候，展示相应的
						self.projectList = [];
						this.nodata = '网络请求失败，请重新尝试';
						this.types = false;
					}
					return preventResult === self.projectList.length;
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
			console.log('this is 爸爸级别刷新');
			//	刷新iscroll
			// if (this.curworkIscroll) {
			// 	this.curworkIscroll.refresh();
			// }
		},
		mounted () {
			console.log('this is 爸爸级别加载');
			// this.initTop('#wrapper', '.iscroll');
			// this.curworkIscroll = this.initIscroll('#wrapper');
			// this.loadmore(this.curworkIscroll, this.pullRefresh, this.pullMore);
		},
		beforeDestroy () {
			// this.curworkIscroll.destroy();
			// this.curworkIscroll = null;
		}
	};
</script>
