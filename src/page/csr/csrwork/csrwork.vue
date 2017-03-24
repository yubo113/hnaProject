<template>
	<div class="csr-work" >
		<div class="common-search m-5">
	    	<input type="text" class="span-10" placeholder="项目名称" v-model="searchName">
	    	<i @click.stop.prevent="projectSearch" class="fa fa-search" aria-hidden="true"></i>
	    </div>
	    <div class="csrwork-iscroll">
			<div id="wrapper">
			<div id="scroller">
				<div class="pull-down" data-type="all">
					下拉刷新
				</div>
				<div v-if="projectList.length > 0">
				    <div class="project-detail row bg-white" v-bind:class="{ ' project-status-success': item.workStautsCode!=='5', ' project-status-failed': item.workStautsCode==='5' }" v-for="(item,index) in projectList" :key="index">
				    	<div class="fl project-text pt-10 pb-10">
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">项目名称</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.projectName }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">报告类别</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.reportType }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">发布时间</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.reportRelTime }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">工作状态</span>
				    			<span>:<span class="pl-10">{{ item.workStauts }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">参与人</span>
				    			<span>:<span class="pl-10 text-blue inline" v-for="(people,index) in item.csrReportSonList" :key="index" @click="enterApp(people)">{{people.reportParticipantname}}</span></span>
				    		</div>
				    	</div>
				    	<div class="fr project-index tc text-white">
				    		{{ index + 1 }}
				    	</div>
				    </div>
			    </div>
			    <div v-else>
			    	<nodata :nodata="nodata" :refresh="projectSearch"></nodata>
			    </div>
			    <div class="pull-up" data-type="all">
					上拉加载更多
				</div>
			</div>
			</div>
			<returntop :iscroll='curworkIscroll'></returntop>
		</div>
	</div>
</template>

<script>
	import IScroll from 'Iscroll';
	import returntop from '../../../components/returntop.vue';
	import nodata from '../../../components/nodata.vue';
	export default {
		components: { 'returntop': returntop, 'nodata': nodata },
		data () {
			return {
				projectList: [],
				curworkIscroll: '',
				searchName: '',
				nodata: ''
			};
		},
		created () {
			this.$store.commit('changeTitle', 'CSR工作');
			this.getCsrWork();
			// this.$store.commit('loadingHide')
		},
		watch: {
		},
		methods: {
			//	进入审批报告
			enterApp: function (people) {
				if (people.thisStatus === '2') {
					this.$router.push({name: 'appReport', query: people});
				} else {
					this.$router.push({name: 'hisReport', query: people});
				}
			},
			getCsrWork: function (name) {
				this.$store.commit('loadingShow');
				const self = this;
				this.$post({
					url: '/app/mainReq?reqUrl=/mobile/csrReport/list',
					params: {
						projectName: name
					}
				}).then(res => {
					if (res.result) {
						console.log(res);
						if (res.data && res.data.csrReportList && res.data.csrReportList.length > 0) {
							self.projectList = res.data.csrReportList;
						} else {
							self.projectList = [];
							this.nodata = '暂无数据';
						}
						this.$store.commit('loadingHide');
					} else {
						self.projectList = [];
						this.nodata = '网络请求失败，请重新尝试';
					}
				});
			},
			//	下拉刷新
			pullRefresh: function () {
				const self = this;
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/csrReport/list',
					params: {
						projectName: name
					}
				}).then(res => {
					if (res.result) {
						console.log(res);
						if (res.data && res.data.csrReportList && res.data.csrReportList.length > 0) {
							self.projectList = res.data.csrReportList;
						} else {
							self.projectList = [];
							this.nodata = '暂无数据';
						}
					} else {
						self.projectList = [];
						this.nodata = '网络请求失败，请重新尝试';
					}
					// return res;
				});
			},
			// 加载更多
			pullMore: function () {
				// this.projectList.push({
				// 	projectName: '项目名称',
				// 	report: '公司领导',
				// 	reportRelTime: '2017-10-2 12:20',
				// 	work: '完成',
				// 	people: [{
				// 		peoplename: '张彦军'
				// 	}, {
				// 		peoplename: '阳光'
				// 	}],
				// 	status: '1'
				// });
			},
			//	搜索框
			projectSearch: function () {
				this.getCsrWork(this.searchName);
			}
		},
		activated () {
			this.$store.commit('changeTitle', 'CSR工作');
	    },
	    deactivated () {
	    },
		updated () {
			//	刷新iscroll
			if (this.curworkIscroll) {
				this.curworkIscroll.refresh();
			}
		},
		mounted () {
			document.querySelector('#wrapper').style.top = `${document.querySelector('.csrwork-iscroll').offsetTop}px`;
			this.curworkIscroll = new IScroll('#wrapper', {
				click: true,
				probeType: 2,
                bounceTime: 250,
                bounceEasing: 'quadratic',
                interactiveScrollbars: false,
                hideScrollbar: false
			});
			this.loadmore(this.curworkIscroll, this.pullRefresh, this.pullMore);
		},
		beforeDestroy () {
			this.curworkIscroll.destroy();
			this.curworkIscroll = null;
		}
	};
</script>
