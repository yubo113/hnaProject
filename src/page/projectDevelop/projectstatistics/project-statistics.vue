<template>
	<div class="csr-work" >
		<div class="project-statis-header">
			<div class="">
				<div class="pl-10 text-white">
					<div class="pb-5 pt-5">
		    			<span class="span-2 inline tr vertical-top">截止到 :</span>
		    			<span class="span-7 textOverflow inline app-report-text vertical-top">2017-08-23  12:23:12</span>
		    		</div>
		    		<div class="pb-5 pt-5">
			    		<div>
			    			<span class="span-2 inblock tr textOverflow">海航集团 :</span>
		    				<span class="span-7 textOverflow inblock app-report-text">共与<span class="font3 inblock">2</span>家机构建立合作关系</span>
			    		</div>
		    			<div>
		    				<span class="span-2 inblock tr"></span>
		    				<span class="span-7 textOverflow inblock app-report-text">合作开展<span class="font3">3</span>项项目</span>
		    			</div>
		    		</div>
				</div>
				<div class="statis-money tc text-white">
					<div class="span-3 inblock tc">
						<div><span>总计投入(元)</span></div>
						<div>123432</div>
					</div>
					<div class="span-3 inblock tc">
						<div><span>现金(元)</span></div>
						<div>123432</div>
					</div>
					<div class="span-3 inblock tc">
						<div><span>物资(元)</span></div>
						<div>123432</div>
					</div>
				</div>
			</div>
		</div>
		<div class="static-tab-wrap text-red m-10 row">
			<div class="static-tab width-4 fl tc" v-bind:class="{'checked-tab': openTab === 1}" @click="openCurrent(1)"><span class="span-10 inblock">合作伙伴统计器</span></div>
			<div class="static-tab width-4 fl tc static-tab-middle" v-bind:class="{'checked-tab': openTab === 2}" @click="openCurrent(2)"><span>公益项目统计器</span></div>
			<div class="static-tab width-4 fl tc" v-bind:class="{'checked-tab': openTab === 3}" @click="openCurrent(3)"><span>资源投入统计器</span></div>
		</div>
	    <div class="statistics-iscroll">
			<div id="wrapper-chart">
				<div v-if="projectList.length === 0" class="ml-10 mr-10">
				    <partner></partner>
			    </div>
			    <div v-else>
			    	<nodata :nodata="nodata" :refresh="projectSearch" :type="types"></nodata>
			    </div>
			</div>
		</div>
	</div>
</template>

<script>
	import nodata from '../../../components/nodata.vue';
	import partner from './partner-statistics.vue';
	export default {
		components: { 'nodata': nodata, 'partner': partner },
		data () {
			return {
				projectList: [],
				statisticsIscroll: '',
				isPullDown: false,
				types: true,
				searchName: '',
				nodata: '暂无数据',
				openTab: 1
			};
		},
		created () {
			this.$store.commit('changeTitle', '公益项目统计');
			this.$store.commit('loadingHide');
			// this.$store.commit('loadingShow');
		},
		watch: {
		},
		methods: {
			//	打开当前tab
			openCurrent: function (index) {
				this.openTab = index;
				this.enterSearch();
			},
			//	进入审批报告
			enterSearch: function (people, item) {
				this.$router.push({name: 'partnersearch'});
				// this.$router.push({name: 'joinHistory'});
			},
			getCsrWork: function (name) {
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
		},
		mounted () {
		},
		beforeDestroy () {
		}
	};
</script>
