<template>
	<div class="csr-work" >
		<div class="project-statis-header">
			<div class="">
				<div class="pl-10 text-white">
					<div class="pb-5 pt-5">
		    			<span class="span-2 inline tr vertical-top">截止到 :</span>
		    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ new Date | timeStrAllFormat }}</span>
		    		</div>
		    		<div class="pb-5 pt-5">
			    		<div>
			    			<span class="span-2 inblock tr textOverflow">海航集团 :</span>
		    				<span class="span-7 textOverflow inblock app-report-text">共与<span class="font3 inblock">{{ this.projectInfo.basProName || 0 }}</span>家机构建立合作关系</span>
			    		</div>
		    			<div>
		    				<span class="span-2 inblock tr"></span>
		    				<span class="span-7 textOverflow inblock app-report-text">合作开展<span class="font3">{{ this.projectInfo.basProField || 0 }}</span>项项目</span>
		    			</div>
		    		</div>
				</div>
				<div class="statis-money tc text-white">
					<div class="span-3 inblock tc">
						<div><span>总计投入(元)</span></div>
						<div>{{ Number(this.projectInfo.hisTotalPlaInpFund) + Number(this.projectInfo.hisPutintoFund) || 0 }}</div>
					</div>
					<div class="span-3 inblock tc">
						<div><span>现金(元)</span></div>
						<div>{{ this.projectInfo.hisTotalPlaInpFund || 0 }}</div>
					</div>
					<div class="span-3 inblock tc">
						<div><span>物资(元)</span></div>
						<div>{{ this.projectInfo.hisPutintoFund || 0 }}</div>
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
				<div v-if="projectList.length === 0" class="ml-10 mr-10 bg-white">
				    <partner-chart v-if="openTab === 1"></partner-chart>
				    <project-chart v-if="openTab === 2"></project-chart>
				    <source-chart v-if="openTab === 3"></source-chart>
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
	import partnerChart from './partner-chart.vue';
	import projectChart from './project-chart.vue';
	import sourceChart from './source-chart.vue';
	export default {
		components: { 'nodata': nodata, 'partner-chart': partnerChart, 'project-chart': projectChart, 'source-chart': sourceChart },
		data () {
			return {
				projectList: [],
				statisticsIscroll: '',
				nodata: '暂无数据',
				options: [],
				openTab: this.$store.state.searchResult.openTab,	//	点击的选中index
				projectInfo: {}							//	获取公益项目统计的详细信息容器
			};
		},
		created () {
			this.$store.commit('changeTitle', '公益项目统计');
			// this.$store.commit('loadingHide');
			this.$store.commit('loadingShow');
			this.getProjectInfo();
		},
		methods: {
			/*
			 *	获取公益项目统计的详细信息(ajax)
			 */
			getProjectInfo: function () {
				this.$get({
					url: '/app/mainReq?reqUrl=/staticin/hnabLedStaticInstitution/getCollectInfo'
				}).then(res => {
					if (res.result) {
						this.projectInfo = res.data;
						if (!this.$store.state.searchResult.partnerChart && this.$store.state.searchResult.openTab === 0) {
							this.getPartnerSearch();
						} else {
							this.$store.commit('loadingHide');
						}
					}
				});
			},
			/*	打开当前tab
			 *	index: 当前tab特定标识
			 *	相应的tab加载样式,并且更改存储状态中的index标识
			 */
			openCurrent: function (index) {
				this.openTab = index;
				this.$store.commit('setOpenTab', index);
				this.enterSearch(index);
			},
			//	进入审批报告
			enterSearch: function (index) {
				if (index === 1) {
					this.$router.push({name: 'partnersearch'});
				} else if (index === 2) {
					this.$router.push({name: 'projectSearch'});
				} else {
					this.$router.push({name: 'sourceSearch'});
				}
			},
			/*
			 *	获取搜索条件,并且创建select2
			 */
			getPartnerSearch: function () {
				this.$get({
					url: '/app/mainReq?reqUrl=/staticin/hnabLedStaticInstitution/getCooperative'
				}).then(res => {
					if (res.result) {
						// const param = res.data.listParam[0];
						const name = res.data.listName;
						const param = res.data.listParam;
						for (let i = 0; i < name.length; i++) {
							let obj = {
								item: '',
								value: ''
							};
							obj.item = name[i];
							obj.value = param[i];
							this.options.push(obj);
						}
					}
					this.getPartnerChart(res.data.listParam[0]);
				});
			},
			/*	点击搜索开始请求图表数据
			 *	1.存储选中状态 2.存贮图表数据
			 */
			getPartnerChart: function (param) {
				this.$get({
					url: '/app/mainReq?reqUrl=/staticin/hnabLedStaticInstitution/getMFAndRatio',
					params: {
						content: param
					}
				}).then(res => {
					if (res.result) {
						const data = res.data;
						const series = [];
						if (data.listParam == null) {
						} else {
							for (let i = 0; i < data.listParam.length; i++) {
								let serie = [];
								serie[0] = data.listName[i];
								serie[1] = Number(data.listParam[i]);
								series[i] = serie;
							}
						}
						//	1.存储(选中值) 2.存贮图表数据
						this.$store.commit('setPartnerSelect', {
							value: param,
							option: this.options
						});
						this.$store.commit('setPartnerChart', series);
						this.$store.commit('setOpenTab', 1);
						this.openTab = this.$store.state.searchResult.openTab;
						this.$store.commit('loadingHide');
					}
				});
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
