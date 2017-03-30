<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div v-if="detail.csrApproval.submitPlanFile && detail.csrApproval.submitPlanFile !== 'null'">
					<span>提交执行方案</span>
					<span class="text-dark-grey">({{detail.csrApproval.documentTime? detail.csrApproval.documentTime : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.submitPlanFile | filesNum }}个)</span>
				</div>
				<div v-if="detail.csrApproval.epfmFile && detail.csrApproval.epfmFile !== 'null'">
					<span>修改执行方案</span>
					<span class="text-dark-grey">({{ detail.csrApproval.epfmTime? detail.csrApproval.epfmTime : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.epfmFile | filesNum }}个)</span>
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
