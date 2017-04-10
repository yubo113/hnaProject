<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div v-if="detail.csrApproval.draftReportDesignFile && detail.csrApproval.draftReportDesignFile !== 'null'">
					<span>提交报告设计初稿</span>
					<span class="text-dark-grey">({{ detail.csrApproval.draftTime? detail.csrApproval.draftTime : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.draftReportDesignFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.draftReportDesignFile | filesNum }}个)</span>
				</div>
				<div v-if="detail.csrApproval.reportDesignDraftFeedbackFile && detail.csrApproval.reportDesignDraftFeedbackFile !== 'null'">
					<span>修改报告设计初稿</span>
					<span class="text-dark-grey">({{ detail.csrApproval.feedbackTime2? detail.csrApproval.feedbackTime2 : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.reportDesignDraftFeedbackFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.reportDesignDraftFeedbackFile | filesNum }}个)</span>
				</div>
				<div>
					<span>报告页数</span>
					<span class="text-dark-grey">({{ detail.csrApproval.reportPages? detail.csrApproval.reportPages : "0" }}页)</span>
				</div>
				<div v-if="!short">
					<div>
						<span>报告校对</span>
						<span class="text-dark-grey">({{ detail.csrApproval.proofTime? detail.csrApproval.proofTime : "0.0" }}h)</span>
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
			return {
				timeout: ''
			};
		},
		methods: {
			/*	储存地址
			 *	fileName: 文件地址
			 *	跳转页面
			 */
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
