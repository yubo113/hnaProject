<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>选定培训合作方</span>
					<span class="text-dark-grey">({{ step.csrApproval.whetherInquiryconsuming? step.csrApproval.whetherInquiryconsuming : "0.0" }}h)</span>
					<span class="text-dark-grey">
						&nbsp;&nbsp;
						{{ step.csrApproval.whetherInquiry && step.csrApproval.whetherInquiry == '0' ? "(是多方询价)" : "(未多方询价)" }}
					</span>
				</div>
				<div>
					<span>达成合作意向</span>
					<span class="text-dark-grey">({{ step.csrApproval.cooperationIntentionconsuming? step.csrApproval.cooperationIntentionconsuming : "0.0" }}h)</span>
				</div>

				<div v-if="step.csrApproval.submitPlanProFile && step.csrApproval.submitPlanProFile !== 'null'">
					<span>拟写合作方案</span>
					<span class="text-dark-grey">({{ step.csrApproval.submitPlanconsuming? step.csrApproval.submitPlanconsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.submitPlanProFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.submitPlanProFile | filesNum }}个)</span>
				</div>
				<div v-if="step.csrApproval.planModifyconsuming && step.csrApproval.planModifyconsuming !== '0.0'">
					<span>修改合作方案</span>
					<span class="text-dark-grey">({{ step.csrApproval.planModifyconsuming? step.csrApproval.planModifyconsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.tenderFeedbackFil)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.submitPlanProFile | filesNum }}个)</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['step'],
		data () {
			return {
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
