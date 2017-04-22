<template>
	<div>
		<div class="common-search m-5">
	    	<input type="text" class="span-10" placeholder="礼品名称" v-model="searchName">
	    	<i @click.stop.prevent="projectSearch" class="fa fa-search" aria-hidden="true"></i>
	    </div>
	    <div class="iscroll">
			<div id="wrapper">
			<div id="scroller">
				<div class="pull-down" data-type="all">
					下拉刷新
				</div>
				<div v-if="projectList.length > 0">
				    <div class="project-detail row bg-white project-status-failed" v-bind:class="{ ' project-status-success': item.workStautsCode==='5' | item.workStautsCode==='2' }" v-for="(item,index) in projectList" :key="index">
				    	<div class="fl project-text pt-10 pb-10">
				    		<div class="pb-10">
				    			<span class="text-light-grey span-3 inline tr">礼品类型</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.projectName }}</span></span>
				    		</div>
				    		<div class="pb-10">
				    			<span class="text-light-grey span-3 inline tr">礼品名称</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.projectName }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inblock tr vertical-top">采购数量</span>
				    			<span class="span-6 inblock vertical-top">:<span class="pl-10 text-blue inblock" v-for="(people,index) in item.csrReportSonList" :key="index" @click="enterApp(people, item)">{{people.reportParticipantname}}</span></span>
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
			<returntop :iscroll='giftListIscroll'></returntop>
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
				giftListIscroll: '',
				isPullDown: false,
				types: true,
				searchName: '',
				nodata: '暂无数据',
				pageCount: 1
			};
		},
		created () {
			this.$store.commit('changeTitle', '礼品采购');
			// this.$store.commit('loadingHide');
			this.$store.commit('loadingShow');
			this.getCsrWork();
		},
		watch: {
		},
		methods: {
			//	进入审批报告
			enterApp: function (people, item) {
				this.$router.push({name: 'giftStock'});
			},
			getCsrWork: function (name) {
				console.log(name);
				const self = this;
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/csrReport/list',
					params: {
						projectName: name,
						pageSize: 10,
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
						this.$store.commit('loadingHide');
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
				// var s = encodeURI(encodeURI(this.searchName));
				this.getCsrWork(this.searchName);
			}
		},
		updated () {
			//	刷新iscroll
			if (this.giftListIscroll) {
				this.giftListIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.iscroll');
			this.giftListIscroll = this.initIscroll('#wrapper');
			this.loadmore(this.giftListIscroll, this.pullRefresh, this.pullMore);
		},
		beforeDestroy () {
			this.giftListIscroll.destroy();
			this.giftListIscroll = null;
		}
	};
</script>
