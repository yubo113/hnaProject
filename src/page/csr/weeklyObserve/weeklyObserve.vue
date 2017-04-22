<template>
	<div class="csr-work" >
		<div class="common-search m-5">
	    	<input type="text" class="span-10" placeholder="刊期" v-model="searchName">
	    	<i @click.stop.prevent="projectSearch" class="fa fa-search" aria-hidden="true"></i>
	    </div>
	    <div class="csrwork-iscroll">
			<div id="wrapper">
			<div id="scroller">
				<div class="pull-down" data-type="all">
					下拉刷新
				</div>
				<div v-if="projectList.length > 0">
				    <div class="project-detail row bg-white project-status-failed" v-bind:class="{ ' project-status-success': item.workStautsCode==='5' | item.workStautsCode==='2' }" v-for="(item,index) in projectList" :key="index">
				    	<div class="fl project-text pt-10 pb-10">
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">刊期</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.projectPen }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">发布时间</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.releaseTime }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">工作状态</span>
				    			<span>:<span class="pl-10">{{ item.workState }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inblock tr vertical-top">参与人</span>
				    			<span class="span-6 inblock vertical-top">:<span class="pl-10 text-blue inblock" v-for="(people,index) in item.csrWeeklySonList" :key="index" @click="enterApp(people, item)">{{people.orgPeopleName}}</span></span>
				    		</div>
				    	</div>
				    	<div class="fr project-index tc text-white">
				    		{{ index + 1 }}
				    	</div>
				    </div>
			    </div>
			    <div v-else>
			    	<nodata :nodata="nodata" :refresh="projectSearch" :type="types"></nodata>
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
	import returntop from '../../../components/returntop.vue';
	import nodata from '../../../components/nodata.vue';
	export default {
		components: { 'returntop': returntop, 'nodata': nodata },
		data () {
			return {
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
			this.$store.commit('changeTitle', '每周责任观察');
			// this.$store.commit('loadingHide');
			// this.$store.commit('loadingShow');
			this.getCsrWork();
		},
		watch: {
		},
		methods: {
			//	进入审批报告
			enterApp: function (people, item) {
				console.log(people);
				people.projectPen = item.projectPen;
				if (people.thisStatus === '2') {
					this.$router.push({name: 'weeklyReport', query: people});
				} else {
					this.$router.push({name: 'weeklyHisory', query: people});
				}
			},
			getCsrWork: function (name) {
				const self = this;
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/csrWeeklyDuty/list',
					params: {
						projectPen: name,
						pageSize: 6,
						pageNo: this.pageCount
					}
				}).then(res => {
					console.log(res);
					const preventResult = self.projectList.length;
					//	当成功返回数据
					if (res.result) {
						console.log(res);
						//	当数据成功并且有数据时候执行
						if (res.data && res.data.csrWeeklyList && res.data.csrWeeklyList.length > 0) {
							//	判断数据是否是上拉加载还是刷新
							if (self.isPullDown) {
								self.projectList = self.projectList.concat(res.data.csrWeeklyList);
								self.isPullDown = false;
							} else {
								self.projectList = res.data.csrWeeklyList;
							}
							this.pageCount += 1;
						} else {
							self.projectList = [];
							this.nodata = '暂无数据';
							this.types = true;
						}
						this.$store.commit('loadingHide');
						console.log(this.projectList);
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
		// activated () {
		// 	this.$store.commit('loadingShow');
		// 	this.$store.commit('changeTitle', '从业人员培训');
		// 	this.getCsrWork();
	 //    },
	 //    deactivated () {
	 //    },
		updated () {
			//	刷新iscroll
			if (this.curworkIscroll) {
				this.curworkIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.csrwork-iscroll');
			this.curworkIscroll = this.initIscroll('#wrapper');
			this.loadmore(this.curworkIscroll, this.pullRefresh, this.pullMore);
		},
		beforeDestroy () {
			this.curworkIscroll.destroy();
			this.curworkIscroll = null;
		}
	};
</script>
