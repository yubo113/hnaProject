<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div v-if="detail.csrApproval.grantTenderFile && detail.csrApproval.grantTenderFile !== 'null'">
					<span>发放招标文件</span>
					<span class="text-dark-grey">({{ detail.csrApproval.grantTime? detail.csrApproval.grantTime : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.grantTenderFile | filesNum }}个)</span>
				</div>
				<div>
					<span>收集应标材料</span>
					<span class="text-dark-grey">({{ detail.csrApproval.collectTime? detail.csrApproval.collectTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>分析应标材料</span>
					<span class="text-dark-grey">({{ detail.csrApproval.analysisTime? detail.csrApproval.analysisTime : "0.0" }}h)</span>
				</div>
				<div v-if="detail.csrApproval.sendNoticeFile && detail.csrApproval.sendNoticeFile !== 'null'">
					<span>发送比稿通知</span>
					<span class="text-dark-grey">({{ detail.csrApproval.sendTime? detail.csrApproval.sendTime : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.sendNoticeFile | filesNum }}个)</span>
				</div>
				<div>
					<span>组织招标会耗时</span>
					<span class="text-dark-grey">({{ detail.csrApproval.organisedTime? detail.csrApproval.organisedTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>招标会现场讲标</span>
					<span class="text-dark-grey">({{ detail.csrApproval.speakMarkTime? detail.csrApproval.speakMarkTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>报文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.messageTime? detail.csrApproval.messageTime : "0.0" }}h)</span>
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
