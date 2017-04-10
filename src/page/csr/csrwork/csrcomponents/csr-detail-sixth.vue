<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>第三方认证</span>
					<span class="text-dark-grey">({{ detail.csrApproval.thirdPartyCertification | filesAgree }})</span>
				</div>
				<div v-if="detail.csrApproval.thirdPartyCertification !== '0'">
					<span>认证单位</span>
					<span class="text-dark-grey">({{ detail.csrApproval.certificationUnit }})</span>
				</div>
				<div v-if="detail.csrApproval.thirdPartyCertification !== '0'">
					<span>认证标准</span>
					<span class="text-dark-grey">({{detail.csrApproval.certificationStandards? detail.csrApproval.certificationStandards : '无'}})</span>
				</div>
				<div v-if="!short">
					<div>
						<span>部门经理汇报</span>
						<span class="text-dark-grey">({{ detail.csrApproval.deptmBriefed2Time? detail.csrApproval.deptmBriefed2Time : "0.0" }}h)</span>
					</div>
					<div>
						<span>报告印刷</span>
						<span class="text-dark-grey">({{ detail.csrApproval.printingTime? detail.csrApproval.printingTime : "0.0" }}h)</span>
						<span class="text-dark-grey">({{ detail.csrApproval.printingNum? detail.csrApproval.printingNum : "0" }}册)</span>
					</div>
					<div>
						<span>报告寄送</span>
						<span class="text-dark-grey">({{ detail.csrApproval.deliveryTime? detail.csrApproval.deliveryTime : "0.0" }}h)</span>
						<span class="text-dark-grey">({{ detail.csrApproval.deliveryNum? detail.csrApproval.deliveryNum : "0" }}册)</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['detail', 'short'],
		data () {
			return {};
		}
	};
</script>
