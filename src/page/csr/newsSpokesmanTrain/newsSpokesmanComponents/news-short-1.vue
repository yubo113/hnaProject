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
						{{ step.csrApproval.whetherInquiry && step.csrApproval.whetherInquiry == '0' ? "(有多方询价)" : "(未多方询价)"
						 }}
					</span>
				</div>
				<div>
					<span>达成合作意向</span>
					<span class="text-dark-grey">({{ step.csrApproval.cooperationIntentionconsuming? step.csrApproval.cooperationIntentionconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>培训费用</span>
					<span class="text-dark-grey">({{ step.csrApproval.trainingFee? step.csrApproval.trainingFee : "0.0" }}元)</span>
					<span class="text-dark-grey">
						&nbsp;&nbsp;
						{{ step.csrApproval.whetherNegotiation && step.csrApproval.whetherNegotiation == '0' ? "(有议价)" : "(未进行议价)" }}
					</span>
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
