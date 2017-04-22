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
				    <div class="project-detail row bg-white charitable-status" v-for="(item,index) in projectList" :key="index">
				    	<div class="fl project-text pt-10 pb-10" @click="enterApp(item.id)">
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">机构名称</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.orgName }}</span></span>
				    		</div>
				    		<div class="pt-10 pb-10">
				    			<span class="text-light-grey span-3 inline tr">对接人</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.orgUser }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">联系方式</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.orgUserTel }}</span></span>
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
			<returntop :iscroll='chaPartnerIscroll'></returntop>
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
				chaPartnerIscroll: '',
				isPullDown: false,
				types: true,
				searchName: '',
				nodata: '暂无数据',
				pageCount: 1
			};
		},
		created () {
			this.$store.commit('loadingShow');
			this.$store.commit('changeTitle', '合作伙伴');
			this.$store.commit('setShareIndex', 2);
			this.getPartnerList();
		},
		watch: {
		},
		methods: {
			//	进入详情页
			enterApp: function (id) {
				this.$router.push({name: 'detailedInfo', query: {id: id}});
			},
			getPartnerList: function (name) {
				const self = this;
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/hnabResProject/commlist',
					params: {
						flag: '1',
						orgName: name,
						pageSize: 10,
						pageNo: this.pageCount
					}
				}).then(res => {
					const preventResult = self.projectList.length;
					//	当成功返回数据
					if (res.result) {
						//	当数据成功并且有数据时候执行
						if (res.data && res.data.length > 0) {
							//	判断数据是否是上拉加载还是刷新
							if (self.isPullDown) {
								self.projectList = self.projectList.concat(res.data);
								self.isPullDown = false;
							} else {
								self.projectList = res.data;
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
				return this.getPartnerList();
			},
			// 加载更多
			pullMore: function () {
				this.isPullDown = true;
				return this.getPartnerList();
			},
			//	搜索框
			projectSearch: function () {
				console.log(this.searchName);
				this.getPartnerList(this.searchName);
			}
		},
		updated () {
			//	刷新iscroll
			if (this.chaPartnerIscroll) {
				this.chaPartnerIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.csrwork-iscroll');
			this.chaPartnerIscroll = this.initIscroll('#wrapper');
			this.loadmore(this.chaPartnerIscroll, this.pullRefresh, this.pullMore);
		},
		beforeDestroy () {
			this.chaPartnerIscroll.destroy();
			this.chaPartnerIscroll = null;
		}
	};
</script>
