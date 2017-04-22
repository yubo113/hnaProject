<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>培训费用</span>
					<span class="text-dark-grey">({{ detail.csrApproval.trainingFee? detail.csrApproval.trainingFee : "0.0" }}元)</span>
					<span class="text-dark-grey">
						&nbsp;&nbsp;
						{{ detail.csrApproval.whetherNegotiation && detail.csrApproval.whetherNegotiation == '0' ? "(有议价)" : "(未进行议价)" }}
					</span>
				</div>
				<div>
					<span>报文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.messageconsuming? detail.csrApproval.messageconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>报合同公文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.contractDocumentsconsuming? detail.csrApproval.contractDocumentsconsuming : "0.0" }}h)</span>
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
