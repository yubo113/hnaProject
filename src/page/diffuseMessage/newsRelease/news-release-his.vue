<template>
	<div>
		<div class="iscroll">
			<div id="wrapper">
				<div id="scroller">
				    <div class="hisflow text-detail">
						<div class="row" v-for="(item, index) in detailHis.historyFlowList" :key="index">
							<div class="pb-10 his-time text-light-grey">
								<div class="his-tip bg-red"></div>
								<span>2017-10-10</span>
							</div>
							<div class="bg-white his-main">
					    		<div class="pb-10 pt-10 row">
					    			<span class="text-light-grey span-2 fl tr vertical-top">执行环节</span>
					    			<span class="span-7 break-all fl app-report-text vertical-top">{{ item.activityName }}</span>
					    		</div>
					    		<div class="pb-10 pt-10 row">
					    			<span class="text-light-grey span-2 fl tr vertical-top">执行人</span>
					    			<span class="span-7 break-all fl app-report-text vertical-top">{{ item.assigneeName }}</span>
					    		</div>
					    		<div class="pb-10 pt-10 row">
					    			<span class="text-light-grey span-2 fl tr vertical-top">开始时间</span>
					    			<span class="span-7 break-all fl app-report-text vertical-top">{{ item.startTime }}</span>
					    		</div>
					    		<div class="pb-10 pt-10 row">
					    			<span class="text-light-grey span-2 fl tr vertical-top">结束时间</span>
					    			<span class="span-7 break-all fl app-report-text vertical-top">{{ item.endTime }}</span>
					    		</div>
					    		<div class="pb-10 pt-10 row">
					    			<span class="text-light-grey span-2 fl tr vertical-top">提交意见</span>
					    			<span class="span-7 break-all fl app-report-text vertical-top">{{ item.comment }}</span>
					    		</div>
					    		<div class="pb-10 pt-10 row">
					    			<span class="text-light-grey span-2 fl tr vertical-top">任务历时</span>
					    			<span class="span-7 break-all fl app-report-text vertical-top">{{ item.durationTime }}</span>
					    		</div>
					    	</div>
			    		</div>
				    </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['detailHis'],
		data () {
			return {
				item: {
					projectName: 'name',
					reportParticipantname: 'shshshsshshddiwuo',
					phone: '17600361839'
				},
				projectList: [],
				curworkIscroll: ''
			};
		},
		created () {
			this.$store.commit('changeTitle', '新闻发稿');
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
			}
		},
		updated () {
			//	刷新iscroll
			if (this.curworkIscroll) {
				this.curworkIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.iscroll');
			this.curworkIscroll = this.initIscroll('#wrapper');
		},
		beforeDestroy () {
			this.curworkIscroll.destroy();
			this.curworkIscroll = null;
		}
	};
</script>
