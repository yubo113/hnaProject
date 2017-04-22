<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>培训费用</span>
					<span class="text-dark-grey">({{ step.csrApproval.trainingFee? step.csrApproval.trainingFee : "0.0" }}元)</span>
					<span class="text-dark-grey">
						&nbsp;&nbsp;
						{{ step.csrApproval.whetherNegotiation && step.csrApproval.whetherNegotiation == '0' ? "(有议价)" : "(未进行议价)" }}
					</span>
				</div>
				<div>
					<span>报文</span>
					<span class="text-dark-grey">({{ step.csrApproval.messageconsuming? step.csrApproval.messageconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>报合同公文</span>
					<span class="text-dark-grey">({{ step.csrApproval.contractDocumentsconsuming? step.csrApproval.contractDocumentsconsuming : "0.0" }}h)</span>
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
