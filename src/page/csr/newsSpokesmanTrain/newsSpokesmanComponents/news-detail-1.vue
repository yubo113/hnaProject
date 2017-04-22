<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>选定培训合作方</span>
					<span class="text-dark-grey">({{ detail.csrApproval.whetherInquiryconsuming? detail.csrApproval.whetherInquiryconsuming : "0.0" }}h)</span>
					<span class="text-dark-grey">
						&nbsp;&nbsp;
						{{ detail.csrApproval.whetherInquiry && detail.csrApproval.whetherInquiry == '0' ? "(是多方询价)" : "(未多方询价)" }}
					</span>
				</div>
				<div>
					<span>达成合作意向</span>
					<span class="text-dark-grey">({{ detail.csrApproval.cooperationIntentionconsuming? detail.csrApproval.cooperationIntentionconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>培训费用</span>
					<span class="text-dark-grey">({{ detail.csrApproval.trainingFee? detail.csrApproval.trainingFee : "0.0" }}元)</span>
					<span class="text-dark-grey">
						&nbsp;&nbsp;
						{{ detail.csrApproval.whetherNegotiation && detail.csrApproval.whetherNegotiation == '0' ? "(有议价)" : "(未进行议价)" }}
					</span>
				</div>

				<div v-if="detail.csrApproval.submitPlanFile && detail.csrApproval.submitPlanFile !== 'null'">
					<span>拟写合作方案</span>
					<span class="text-dark-grey">({{ detail.csrApproval.submitPlanconsuming? detail.csrApproval.submitPlanconsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.submitPlanFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.submitPlanFile | filesNum }}个)</span>
				</div>
				<div v-if="detail.csrApproval.planModifyFile && detail.csrApproval.planModifyFile !== 'null'">
					<span>修改合作方案</span>
					<span class="text-dark-grey">({{ detail.csrApproval.planModifyconsuming? detail.csrApproval.planModifyconsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.planModifyFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.planModifyFile | filesNum }}个)</span>
				</div>
				<div v-if="detail.csrApproval.schemefinalizedfile && detail.csrApproval.schemefinalizedfile !== 'null'">
					<span>定稿合作方案</span>
					<span class="text-dark-grey">({{ detail.csrApproval.schemeFinalizedconsuming? detail.csrApproval.schemeFinalizedconsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.schemefinalizedfile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.schemefinalizedfile | filesNum }}个)</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['detail'],
		data () {
			return {
				timeout: ''
			};
		},
		methods: {
			enterFileImg: function (fileName) {
				this.$store.commit('setFileList', fileName);
				this.$router.push({name: 'fileImg'});
			}
		},
		mounted () {
		},
		beforeDestroy () {
		}
	};
</script>
