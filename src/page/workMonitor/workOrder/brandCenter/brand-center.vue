<template>
	<div class="iscroll">
		<div id="wrapper">
			<div id="scroller">
				<div class="app-report row bg-white p-10 mt-10">
					<div class="">
						<span class="text-grey planning-title">品牌规划中心数量统计,工作任务总计<span>44</span>项,已完成<span>9</span>项,未完成<span>35</span>项</span>
						<div>
							<span class="text-grey planning-title font2">
								1.年度重点工作<span class="planning-title-text">26</span>项,未完成<span class="planning-title-text">11</span>项
							</span>
						</div>
						<div>
							<span class="text-grey planning-title font2">
								1.年度重点工作<span class="planning-title-text">26</span>项,未完成<span class="planning-title-text">11</span>项
							</span>
						</div>
						<div>
							<span class="text-grey planning-title font2">
								1.年度重点工作<span class="planning-title-text">26</span>项,未完成<span class="planning-title-text">11</span>项
							</span>
						</div>
					</div>
				</div>
				<div class="static-tab-wrap text-red m-10 row">
					<div class="static-tab width-4 fl tc" v-bind:class="{'checked-tab': openTab === 1}" @click="openCurrent(1)"><span class="block textOverflow">年度重点工作</span></div>
					<div class="static-tab width-4 fl tc static-tab-middle" v-bind:class="{'checked-tab': openTab === 2}" @click="openCurrent(2)"><span class="block textOverflow">集团领导交办工作</span></div>
					<div class="static-tab width-4 fl tc" v-bind:class="{'checked-tab': openTab === 3}" @click="openCurrent(3)"><span class="block textOverflow">会议布置工作</span></div>
				</div>
				<yearImportant></yearImportant>
			</div>
		</div>
	</div>
</template>

<script>
// 	import returntop from '../../../components/returntop.vue';
// 	import nodata from '../../../components/nodata.vue';
import yearImportant from './brandTab/yearOfImportant.vue';
	export default {
		components: { 'yearImportant': yearImportant },
		data () {
			return {
				openTab: 1,								//	当前tab选中标识
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
			// this.$store.commit('loadingShow');
			// this.getMediaInfo();
		},
		methods: {
			/*	打开当前子tab
			 *	index: 选择的index
			 */
			openCurrent: function (index) {
				this.openTab = index;
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
			//	刷新iscroll
			if (this.curworkIscroll) {
				console.log('this is 主页面刷新');
				this.curworkIscroll.refresh();
			}
		},
		mounted () {
			console.log('this is 主页面挂载');
			this.initTop('#wrapper', '.iscroll');
			this.curworkIscroll = this.initIscroll('#wrapper');
			// this.loadmore(this.curworkIscroll, this.pullRefresh, this.pullMore);
		},
		beforeDestroy () {
			this.curworkIscroll.destroy();
			this.curworkIscroll = null;
		}
	};
</script>
