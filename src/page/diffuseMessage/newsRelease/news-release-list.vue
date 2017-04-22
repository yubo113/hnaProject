<template>
	<div class="csr-work" >
		<div class="common-search m-5">
	    	<input type="text" class="span-10" placeholder="新闻信息" v-model="searchName">
	    	<i @click.stop.prevent="projectSearch" class="fa fa-search" aria-hidden="true"></i>
	    </div>
	    <div class="csrwork-iscroll">
			<div id="wrapper">
			<div id="scroller">
				<div class="pull-down" data-type="all">
					下拉刷新
				</div>
				<div v-if="projectList.length > 0">
				    <div class="project-detail row bg-white" v-bind:class="{ 'project-status-success': item.statusCode==='3', ' project-status-failed': item.statusCode!=='3'}" v-for="(item,index) in projectList" :key="index">
				    	<div class="fl project-text pt-10 pb-10" @click="enterApp(item)">
				    		<div class="pb-10 row">
				    			<span class="text-light-grey span-3 tr fl">新闻信息概述</span>
				    			<span class="span-7 fl"><span class="span-1 tc fl">:</span><span class="span-9 fl textOverflow">{{ item.ndNewsInfo }}</span></span>
				    		</div>
				    		<div class="row">
				    			<span class="text-light-grey span-3 fl tr vertical-top">发布方式</span>
				    			<span class="fl vertical-top span-7"><span class="span-1 tc fl vertical-top">:</span><span class="span-9 fl vertical-top">{{ item.ndPublishMode }}</span></span>
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
			<returntop :iscroll='newsListIscroll'></returntop>
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
				projectList: [],								//	列表数据容器
				newsListIscroll: '',							//	iscroll容器
				isPullDown: false,								//	true为上拉加载,false为下拉刷新
				types: true,									//	true为暂无数据,false为无网络
				searchName: this.$store.state.monitorData.news,	//	搜索的新闻信息
				nodata: '暂无数据',								//	无数据和无网络显示内容
				pageCount: 1									//	加载第几页
			};
		},
		created () {
			this.$store.commit('changeTitle', '新闻发稿');
			this.$store.commit('loadingShow');
			this.getNewsList();
		},
		watch: {
		},
		methods: {
			//	进入审批报告
			enterApp: function (item) {
				this.$router.push({name: 'newsRelease', query: {id: item.id}});
			},
			/*
			 *	获取新闻发稿信息列表
			 */
			getNewsList: function () {
				const self = this;
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/newsPublish/list',
					params: {
						ndNewsInfo: this.searchName,
						pageSize: 10,
						pageNo: this.pageCount
					}
				}).then(res => {
					const preventResult = self.projectList.length;
					//	当成功返回数据
					if (res.result) {
						console.log(res.data);
						//	当数据成功并且有数据时候执行
						if (res.data && res.data.newsPublishList && res.data.newsPublishList.length > 0) {
							//	判断数据是否是上拉加载还是刷新
							if (self.isPullDown) {
								self.projectList = self.projectList.concat(res.data.newsPublishList);
								self.isPullDown = false;
							} else {
								self.projectList = res.data.newsPublishList;
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
				return this.getNewsList();
			},
			// 加载更多
			pullMore: function () {
				this.isPullDown = true;
				return this.getNewsList();
			},
			//	搜索框
			projectSearch: function () {
				this.pageCount = 1;
				this.$store.commit('setNewsRelease', this.searchName);
				this.getNewsList();
			}
		},
		updated () {
			//	刷新iscroll
			if (this.newsListIscroll) {
				this.newsListIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.csrwork-iscroll');
			this.newsListIscroll = this.initIscroll('#wrapper');
			this.loadmore(this.newsListIscroll, this.pullRefresh, this.pullMore);
		},
		beforeDestroy () {
			this.newsListIscroll.destroy();
			this.newsListIscroll = null;
		}
	};
</script>
