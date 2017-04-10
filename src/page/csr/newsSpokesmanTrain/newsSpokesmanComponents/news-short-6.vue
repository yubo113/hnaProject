<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>报付款公文</span>
					<span class="text-dark-grey">({{ step.csrApproval.paymentDocumentconsuming? step.csrApproval.paymentDocumentconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>付款</span>
					<span class="text-dark-grey">({{ step.csrApproval.paymentconsuming? step.csrApproval.paymentconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>制作实战演习视频</span>
					<span class="text-dark-grey">({{ step.csrApproval.productionPracticevideoconsum? step.csrApproval.productionPracticevideoconsum : "0.0" }}h)</span>
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
