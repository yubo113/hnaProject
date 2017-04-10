<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">

				<div>
					<span>报付款公文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.paymentDocumentconsuming? detail.csrApproval.paymentDocumentconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>付款</span>
					<span class="text-dark-grey">({{ detail.csrApproval.paymentconsuming? detail.csrApproval.paymentconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>制作实战演习视频</span>
					<span class="text-dark-grey">({{ detail.csrApproval.productionPracticevideoconsum? detail.csrApproval.productionPracticevideoconsum : "0.0" }}h)</span>
				</div>
				<div>
					<span>下发实战演习复盘会通</span>
					<span class="text-dark-grey">({{ detail.csrApproval.distributedPracticeconsuming? detail.csrApproval.distributedPracticeconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>实战演习复盘会</span>
					<span class="text-dark-grey">({{ detail.csrApproval.drillsWillanalyseconsuming? detail.csrApproval.drillsWillanalyseconsuming : "0.0" }}h)</span>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['detail'],
		data () {
			return {};
		}
	};
</script>
