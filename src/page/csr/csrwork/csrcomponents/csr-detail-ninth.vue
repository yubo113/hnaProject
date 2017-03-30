<template>
	<div class="bg-white">
	    <div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div v-if="detail.csrApproval.pressReleaseWrittenFile && detail.csrApproval.pressReleaseWrittenFile !== 'null'">
    				<span>拟写新闻稿</span>
					<span class="text-dark-grey">({{ detail.csrApproval.writtenTime? detail.csrApproval.writtenTime : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.pressReleaseWrittenFile | filesNum }}个)</span>
				</div>
				<div v-if="detail.csrApproval.pressReleaseGrantFile && detail.csrApproval.pressReleaseGrantFile !== 'null'">
    				<span>新闻稿发放</span>
					<span class="text-dark-grey">({{ detail.csrApproval.grantTime2? detail.csrApproval.grantTime2 : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.pressReleaseGrantFile | filesNum }}个)</span>
				</div>
				<div>
					<span>报付款公文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.paymentTime? detail.csrApproval.paymentTime : "0.0" }}h)</span>
				</div>
    			<div>
					<span>报告复盘总结会</span>
					<span class="text-dark-grey">({{detail.csrApproval.summaryMeetingTime? detail.csrApproval.summaryMeetingTime : "0.0" }}h)</span>
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
