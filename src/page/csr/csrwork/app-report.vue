<template>
	<div class="csr-work" >
	    <div class="iscroll">
			<div id="wrapper">
			<div id="scroller">
				<!-- <div class="pull-down" data-type="all">
					下拉刷新
				</div> -->
			    <div>
			    	<div class="app-report row bg-white pt-20">
			    		<div class="mb-20">
			    			<span class="text-light-grey span-2 inline tr">项目名称</span>
			    			<span class="span-7 textOverflow inline app-report-text">{{ $route.query.projectName }}</span>
			    		</div>
			    		<div class="mb-20">
			    			<span class="text-light-grey span-2 inline tr">参与人</span>
			    			<span class="span-7 textOverflow inline app-report-text">{{ $route.query.reportParticipantname }}</span>
			    		</div>
			    		<div class="mb-20">
			    			<detailFirst :detail="detail" v-if="detailStep == 1"></detailFirst>
				    		<detailSecond :detail="detail" v-if="detailStep == 2"></detailSecond>
				    		<detailThird :detail="detail" v-if="detailStep == 3"></detailThird>
				    		<detailFourth :detail="detail" v-if="detailStep == 4"></detailFourth>
				    		<detailFifth :detail="detail" v-if="detailStep == 5"></detailFifth>
				    		<detailSixth :detail="detail" v-if="detailStep == 6"></detailSixth>
				    		<detailSeventh :detail="detail" v-if="detailStep == 7"></detailSeventh>
				    		<detailEighth :detail="detail" v-if="detailStep == 8"></detailEighth>
				    		<detailNinth :detail="detail" v-if="detailStep == 9"></detailNinth>
			    		</div>
			    		<div class="mb-20">
			    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
			    			<span class="span-7 textOverflow inline app-report-text"><textarea style="width:100%;"  v-bind:class="{ 'error': textError }" rows="8" :readonly="readonly" v-model="getAdvice"></textarea></span>
			    		</div>
			    		<div class="mb-20" v-if="textError">
			    			<span class="text-light-grey span-2 inline tr"></span>
			    			<span class="inline app-report-text text-red">*这是必填字段</span>
			    		</div>
			    		<div class="mb-20">
			    			<span class="text-light-grey span-2 inline tr">审批结果</span>
			    			<span v-if="reported" class="inline app-report-text app-report-button bg-green text-white" @click="reportResult(true)">同意</span>
			    			<span v-if="reported" class="inline app-report-text app-report-button bg-red text-white" @click="reportResult(false)">拒绝</span>
			    			<span v-else class="inline app-report-text app-report-button">{{ resultText }}</span>
			    		</div>
			    	</div>
			    </div>
			    <!-- <div class="pull-up" data-type="all">
					上拉加载更多
				</div> -->
			</div>
			</div>
		</div>
		<div class="check-more tc bg-red text-white" @click="enterHisReport">
			<span>查看历史审批</span>
		</div>
	</div>
</template>

<script>
	import IScroll from 'Iscroll';
	import { MessageBox } from 'mint-ui';
	import detailFirst from './csrcomponents/csr-detail-first.vue';
	import detailSecond from './csrcomponents/csr-detail-second.vue';
	import detailThird from './csrcomponents/csr-detail-third.vue';
	import detailFourth from './csrcomponents/csr-detail-fourth.vue';
	import detailFifth from './csrcomponents/csr-detail-fifth.vue';
	import detailSixth from './csrcomponents/csr-detail-sixth.vue';
	import detailSeventh from './csrcomponents/csr-detail-seventh.vue';
	import detailEighth from './csrcomponents/csr-detail-eighth.vue';
	import detailNinth from './csrcomponents/csr-detail-ninth.vue';
	export default {
		components: {'detailFirst': detailFirst, 'detailSecond': detailSecond, 'detailThird': detailThird, 'detailFourth': detailFourth, 'detailFifth': detailFifth, 'detailSixth': detailSixth, 'detailSeventh': detailSeventh, 'detailEighth': detailEighth, 'detailNinth': detailNinth},
		data () {
			return {
				appReportIscroll: '',
				appReportDetail: {},
				reported: true,
				readonly: false,
				getAdvice: '',
				textError: false,
				detail: {
					csrApproval: {}
				},
				detailStep: ''
			};
		},
		created () {
			this.$store.commit('loadingShow');
			this.$store.commit('changeTitle', 'CSR动态报告审批');
			this.getReport();
		},
		watch: {
		},
		methods: {
			//	获取展示内容
			getReport: function () {
				const self = this;
				const userId = this.$route.query.thisStep;
				this.$post({
					url: '/app/mainReq?reqUrl=/mobile/csrReport/approvalDetail',
					params: {
						id: this.$route.query.id
					}
				}).then(res => {
					if (res.result) {
						if (res.data[`step${userId}`]) {
							self.detail.csrApproval = res.data[`step${userId}`];
							self.detailStep = userId;
							this.$store.commit('loadingHide');
							console.log(self.detailStep);
							console.log(self.$route.query.id);
							console.log(self.detail.csrApproval);
						}
					}
				});
			},
			//	审批结果发送
			reportOperate: function (resultObj) {
				this.$post({
					url: '/app/mainReq?reqUrl=/dynrap/hnabCsrDynrAp/approvalResult',
					params: {
						'id': this.$route.query.id,
						'hnabCsrApprovalInfo.status': resultObj.result,
						'hnabCsrApprovalInfo.remarks': resultObj.resultDetail,
						'hnabCsrApprovalInfo.parentid': this.$route.query.id,
						'hnabCsrApprovalInfo.thisStep': this.$route.query.thisStep,
						'mobileLogin': true
					}
				}).then(res => {
					//	当成功返回数据
					if (res.result) {
						console.log(res);
						this.reported = false;
						this.readonly = true;
					} else {
						console.log(res);
						//	当返回数据失败时候，展示相应的
					}
				});
			},
			//	向后台传送值
			returnResult: function (value) {
				if (value === '同意') {
					return 1;
				} else {
					return 0;
				}
			},
			//	判断输入是否为空或者全部为空格，是返回true
			errorText: function () {
				if (this.getAdvice === '') return true;
				const regu = '^[ ]+$';
				const re = new RegExp(regu);
				return re.test(this.getAdvice);
			},
			//	进入历史审批报告
			enterHisReport: function () {
				if (this.readonly) {
					this.$router.replace({name: 'hisReport', query: this.$route.query});
				} else {
					this.$router.push({name: 'hisReport', query: this.$route.query});
				}
			},
			//	返回点击结果
			reportResult: function (bool) {
				const self = this;
				self.textError = self.errorText();
				if (!self.textError) {
					MessageBox.confirm('确定执行此操作', '提醒').then(action => {
						if (bool) {
							self.resultText = '同意';
						} else {
							self.resultText = '拒绝';
						}
						self.reportOperate({
							result: self.returnResult(self.resultText),
							resultDetail: self.getAdvice
						});
					}, action => {});
				}
				// this.$store.commit('tipShow');
			},
			//	进入文件预览
			enterFileImg: function (url) {
				this.$router.replace({name: 'fileImg'});
			}
		},
		updated () {
			//	刷新iscroll
			if (this.appReportIscroll) {
				this.appReportIscroll.refresh();
			}
		},
		mounted () {
			document.querySelector('#wrapper').style.top = `${document.querySelector('.iscroll').offsetTop}px`;
			document.querySelector('#wrapper').style.bottom = '0.7rem';
			this.appReportIscroll = new IScroll('#wrapper', {
				click: true,
				probeType: 2,
                bounceTime: 250,
                bounceEasing: 'quadratic',
                interactiveScrollbars: false,
                hideScrollbar: false
			});
			// this.loadmore(this.appReportIscroll,this.pullMore,this.pullMore);
		},
		beforeDestroy () {
			this.appReportIscroll.destroy();
			this.appReportIscroll = null;
		}
	};
</script>
