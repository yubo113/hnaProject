<template>
	<div class="csr-work" >
		<div v-if="projectList.length > 0">
		    <div class="project-detail row bg-white project-status-failed" v-bind:class="{ ' project-status-success': item.workStautsCode==='5' | item.workStautsCode==='2' }" v-for="(item,index) in projectList" :key="index">
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
		    			<span class="text-light-grey span-3 inblock tr vertical-top">参与人</span>
		    			<span class="span-6 inblock vertical-top">:<span class="pl-10 text-blue inblock" v-for="(people,index) in item.csrReportSonList" :key="index" @click="enterApp(people, item)">{{people.reportParticipantname}}</span></span>
		    		</div>
		    	</div>
		    	<div class="fr project-index tc text-white">
		    		{{ index + 1 }}
		    	</div>
		    </div>
	    </div>
	    <div v-else>
	    	<nodata :nodata="nodata" :type="types"></nodata>
	    </div>
	</div>
</template>

<script>
	import returntop from '../../../../../components/returntop.vue';
	import nodata from '../../../../../components/nodata.vue';
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
			// this.$store.commit('loadingShow');
			this.getCsrWork();
		},
		watch: {
		},
		methods: {
			//	进入审批报告
			enterApp: function (id) {
				// this.$router.push({name: 'joinHistory', query: {id: id}});
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
						this.$store.commit('loadingHide');
					}
					return preventResult === self.projectList.length;
				});
			}
		},
		updated () {
			console.log(this.projectList.length);
			console.log('this is 子页面刷新');
		},
		mounted () {
			console.log('this is 子页面挂载');
		},
		beforeDestroy () {
		}
	};
</script>
