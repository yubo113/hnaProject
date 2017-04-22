<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">

				<div>
					<span>拟写工作动态</span>
					<span class="text-dark-grey">({{ detail.csrApproval.writingWorkDynConsuming? detail.csrApproval.writingWorkDynConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>费用清算</span>
					<span class="text-dark-grey">({{ detail.csrApproval.costLiquidationConsuming? detail.csrApproval.costLiquidationConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>制作论坛集锦</span>
					<span class="text-dark-grey">({{ detail.csrApproval.makeForumHighConsuming? detail.csrApproval.makeForumHighConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>拟写项目总结报告</span>
					<span class="text-dark-grey">({{ detail.csrApproval.writingProjectConsuming? detail.csrApproval.writingProjectConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>报付款公文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.paymentDocumentConsuming? detail.csrApproval.paymentDocumentConsuming : "0.0" }}h)</span>
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
