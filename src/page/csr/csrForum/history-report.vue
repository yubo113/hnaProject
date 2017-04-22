<template>
	<div class="csr-work" >
		<div class="app-report bg-white pt-20">
			<div class="mb-20">
    			<span class="text-light-grey span-2 inline tr">论坛名称</span>
    			<span class="span-7 textOverflow inline app-report-text">{{ this.$route.query.forumName }}</span>
    		</div>
    		<div class="mb-20">
    			<span class="text-light-grey span-2 inline tr">参与人</span>
    			<span class="span-7 textOverflow inline app-report-text">{{ this.$route.query.participantName }}</span>
    		</div>
		</div>
	    <div class="iscroll">
			<div id="wrapper">
			<div id="scroller">
				<!-- <div class="pull-down" data-type="all">
					下拉刷新
				</div> -->
				<div class="hisflow text-detail">
					<!-- STEP1 -->
					<div class="row" v-if="hisList.show.step1">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step1.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
							<!-- STEP1展示缩略图 -->
							<div v-if="openIndex !== hisList.index.step1">
								<short-first :step="hisList.step1"></short-first>
					    		<div class="pb-10">
				    				<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP1详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step1Detail">
						    		<div class="pb-10 pt-10">
						    			<detailFirst :detail="detail"></detailFirst>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
					    	<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step1,hisList.step1.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step1, 'fa-angle-double-up': openIndex === hisList.index.step1 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP2 -->
					<div class="row" v-if="hisList.show.step2">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step2.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP2缩略图 -->
							<div v-if="openIndex !== hisList.index.step2">
								<short-second :step="hisList.step2"></short-second>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP2详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step2Detail">
						    		<div class="pb-10 pt-10">
						    			<detailSecond :detail="detail"></detailSecond>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step2,hisList.step2.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step2, 'fa-angle-double-up': openIndex === hisList.index.step2 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP3 -->
					<div class="row" v-if="hisList.show.step3">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step3.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP3缩略图 -->
							<div v-if="openIndex !== hisList.index.step3">
								<short-third :step="hisList.step3"></short-third>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP3详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step3Detail">
						    		<div class="pb-10 pt-10">
						    			<detailThird :detail="detail"></detailThird>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step3,hisList.step3.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step3, 'fa-angle-double-up': openIndex === hisList.index.step3 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP4 -->
					<div class="row" v-if="hisList.show.step4">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step4.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP4缩略图 -->
							<div v-if="openIndex !== hisList.index.step4">
								<short-fourth :step="hisList.step4"></short-fourth>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP4详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step4Detail">
						    		<div class="pb-10 pt-10">
										<detailFourth :detail="detail"></detailFourth>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step4,hisList.step4.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step4, 'fa-angle-double-up': openIndex === hisList.index.step4 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP5 -->
					<div class="row" v-if="hisList.show.step5">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step5.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP5缩略图 -->
							<div v-if="openIndex !== hisList.index.step5">
								<short-fifth :step="hisList.step5"></short-fifth>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP5详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step5Detail">
						    		<div class="pb-10 pt-10">
										<detailFifth :detail="detail"></detailFifth>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step5,hisList.step5.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step5, 'fa-angle-double-up': openIndex === hisList.index.step5 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP6 -->
		    		<div class="row" v-if="hisList.show.step6">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step6.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP6缩略图 -->
							<div v-if="openIndex !== hisList.index.step6">
								<short-sixth :step="hisList.step6"></short-sixth>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP6详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step6Detail">
						    		<div class="pb-10 pt-10">
										<detailSixth :detail="detail"></detailSixth>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step6,hisList.step6.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step6, 'fa-angle-double-up': openIndex === hisList.index.step6 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP7 -->
		    		<div class="row" v-if="hisList.show.step7">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step7.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP7缩略图 -->
							<div v-if="openIndex !== hisList.index.step7">
								<short-seventh :step="hisList.step7"></short-seventh>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP7详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step7Detail">
						    		<div class="pb-10 pt-10">
										<detailSeventh :detail="detail"></detailSeventh>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step7,hisList.step7.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step7, 'fa-angle-double-up': openIndex === hisList.index.step7 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP8 -->
		    		<div class="row" v-if="hisList.show.step8">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step8.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP8缩略图 -->
							<div v-if="openIndex !== hisList.index.step8">
								<short-eighth :step="hisList.step8"></short-eighth>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP8详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step8Detail">
						    		<div class="pb-10 pt-10">
										<detailEighth :detail="detail"></detailEighth>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step8,hisList.step8.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step8, 'fa-angle-double-up': openIndex === hisList.index.step8 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP9 -->
		    		<div class="row" v-if="hisList.show.step9">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step9.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP9缩略图 -->
							<div v-if="openIndex !== hisList.index.step9">
								<short-ninth :step="hisList.step9"></short-ninth>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP9详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step9Detail">
						    		<div class="pb-10 pt-10">
										<detailNinth :detail="detail"></detailNinth>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step9,hisList.step9.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step9, 'fa-angle-double-up': openIndex === hisList.index.step9 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
				</div>
			    <!-- <div class="pull-up" data-type="all">
					上拉加载更多
				</div> -->
			</div>
			</div>
		</div>
	</div>
</template>

<script>
	import shortFirst from './csrForumComponents/forum-short-1.vue';
	import shortSecond from './csrForumComponents/forum-short-2.vue';
	import shortThird from './csrForumComponents/forum-short-3.vue';
	import shortFourth from './csrForumComponents/forum-short-4.vue';
	import shortFifth from './csrForumComponents/forum-short-5.vue';
	import shortSixth from './csrForumComponents/forum-short-6.vue';
	import detailFirst from './csrForumComponents/forum-detail-1.vue';
	import detailSecond from './csrForumComponents/forum-detail-2.vue';
	import detailThird from './csrForumComponents/forum-detail-3.vue';
	import detailFourth from './csrForumComponents/forum-detail-4.vue';
	import detailFifth from './csrForumComponents/forum-detail-5.vue';
	import detailSixth from './csrForumComponents/forum-detail-6.vue';
	
	export default {
		components: {
			'short-first': shortFirst,
			'short-second': shortSecond,
			'short-third': shortThird,
			'short-fourth': shortFourth,
			'short-fifth': shortFifth,
			'short-sixth': shortSixth,
			'detailFirst': detailFirst,
			'detailSecond': detailSecond,
			'detailThird': detailThird,
			'detailFourth': detailFourth,
			'detailFifth': detailFifth,
			'detailSixth': detailSixth
		},
		data () {
			return {
				hisReportIscroll: null,
				isPullDown: false,
				types: true,
				openIndex: '',
				timeout: '',
				hisList: {
					show: {
						step1: false,
						step2: false,
						step3: false,
						step4: false,
						step5: false,
						step6: false
					},
					index: {
						step1: 1,
						step2: 2,
						step3: 3,
						step4: 4,
						step5: 5,
						step6: 6
					}
				},
				safely: true
			};
		},
		created () {
			this.$store.commit('loadingShow');
			this.$store.commit('changeTitle', 'CSR论坛历史审批');
			this.getHisList();
		},
		watch: {
		},
		methods: {
			//	获取列表消息
			getHisList: function () {
				//	loading图加载
				this.$store.commit('loadingShow');
				const self = this;
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/csrApproval/list',
					params: {
						parentid: self.$route.query.id
					}
				}).then(res => {
					if (res.result) {
						if (res.data && res.data.csrApprovalInfos.length > 0) {
							// console.log(res);
							for (const i of res.data.csrApprovalInfos) {
								self.hisList = Object.assign(self.hisList, i);
							}
							for (let k = 0; k < res.data.csrApprovalInfos.length; k++) {
								self.hisList.show[`step${k + 1}`] = true;
							}
						}
						this.$store.commit('loadingHide');
					}
				});
			},
			//	切换状态
			openResut: function (index) {
				if (index === this.openIndex) {
					this.openIndex = '';
				} else {
					this.openIndex = index;
				}
			},
			//	返回点击结果
			openDetail: function (index, stepIndex) {
				const self = this;
				if (!self.hisList[`step${stepIndex}Detail`] && self.safely) {
					//	loading图加载
					this.$store.commit('loadingShow');
					self.safely = false;
					this.$post({
						url: '/app/mainReq?reqUrl=/mobile/csrApproval/list',
						params: {
							parentid: self.$route.query.id,
							thisStep: stepIndex
						}
					}).then(res => {
						if (res.result) {
							if (res.data && res.data.csrApprovalInfos.length > 0) {
								self.hisList[`step${stepIndex}Detail`] = res.data.csrApprovalInfos;
								self.openResut(index);
								console.log(self.hisList);
							}
							//	loading图取消
							if (self.timeout) {
								clearTimeout(self.timeout);
							}
							self.timeout = setTimeout(function () {
								self.$store.commit('loadingHide');
								self.safely = true;
							}, 500);
						}
					});
				} else {
					self.openResut(index);
				}
			},
			pullmore: function () {

			},
			/*	储存地址
			 *	fileName: 文件地址
			 *	跳转页面
			 */
			enterFileImg: function (fileName) {
				this.$store.commit('setFileList', fileName);
				this.$router.push({name: 'fileImg'});
			}
		},
		updated () {
			//	刷新iscroll
			if (this.hisReportIscroll) {
				this.hisReportIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.iscroll');
			this.hisReportIscroll = this.initIscroll('#wrapper');
			// this.loadmore(this.hisReportIscroll, this.pullMore, this.pullMore);
		},
		beforeDestroy () {
			this.hisReportIscroll.destroy();
			this.hisReportIscroll = null;
			if (this.timeout) {
				clearTimeout(this.timeout);
			}
		}
	};
</script>
