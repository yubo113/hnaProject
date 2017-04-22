<template>
	<div class="csr-work" >
		<div class="common-search m-5">
	    	<input type="text" class="span-10" placeholder="媒体名称" v-model="searchName">
	    	<i @click.stop.prevent="projectSearch" class="fa fa-search" aria-hidden="true"></i>
	    </div>
	    <div class="iscroll">
			<div id="wrapper">
				<div id="scroller">
					<div class="pull-down" data-type="all">
						下拉刷新
					</div>
					<div v-if="projectList.length > 0">
					    <div class="project-detail row bg-white media-status-success"  v-for="(item,index) in projectList" :key="index">
					    	<div class="fl project-text pt-10 pb-10"  @click="enterApp(item)">
					    		<div>
					    			<span class="text-light-grey span-3 inline tr">媒体名称</span>
					    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.mediaName }}</span></span>
					    		</div>
					    		<div>
					    			<span class="text-light-grey span-3 inline tr">合作负责人</span>
					    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.coopHead }}</span></span>
					    		</div>
					    		<div>
					    			<span class="text-light-grey span-3 inline tr">联系方式</span>
					    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.coopbrftel }}</span></span>
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
				projectList: [],				//	列表数据容器
				curworkIscroll: '',				//	储存iscroll容器
				isPullDown: false,				//	true为上拉加载,false为下拉刷新
				types: true,					//	true为暂无数据,false为无网络
				searchName: this.$store.state.monitorData.mediaInfo,	//	搜索的媒体信息
				nodata: '暂无数据',				//	无数据和无网络显示内容
				pageCount: 1					//	加载第几页
			};
		},
		created () {
			this.$store.commit('changeTitle', '媒体合作信息');
			this.$store.commit('loadingHide');
			// this.getMediaInfo();
		},
		watch: {
		},
		methods: {
			//	进入审批报告
			enterApp: function (item) {
				this.$router.push({name: 'mediaDetail', query: {id: item.id}});
			},
			getMediaInfo: function () {
				console.log(this.searchName);
				const self = this;
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/mediaCoop/list',
					params: {
						mediaName: this.searchName,
						pageSize: 6,
						pageNo: this.pageCount
					}
				}).then(res => {
					const preventResult = self.projectList.length;
					//	当成功返回数据
					if (res.result) {
						console.log(res);
						//	当数据成功并且有数据时候执行
						if (res.data && res.data.mediaCoopList && res.data.mediaCoopList.length > 0) {
							//	判断数据是否是上拉加载还是刷新
							if (self.isPullDown) {
								self.projectList = self.projectList.concat(res.data.mediaCoopList);
								self.isPullDown = false;
							} else {
								self.projectList = res.data.mediaCoopList;
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
				return this.getMediaList();
			},
			// 加载更多
			pullMore: function () {
				this.isPullDown = true;
				return this.getMediaList();
			},
			//	搜索框
			projectSearch: function () {
				this.pageCount = 1;
				this.$store.commit('setMediaInfo', this.searchName);
				this.getMediaList();
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
			this.loadmore(this.curworkIscroll, this.pullRefresh, this.pullMore);
		},
		beforeDestroy () {
			this.curworkIscroll.destroy();
			this.curworkIscroll = null;
		}
	};
</script>
