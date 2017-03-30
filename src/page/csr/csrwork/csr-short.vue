<template>
	<!-- STEP1展示缩略图 -->
	<div v-if="dataList">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div v-if="hisList.step1.csrApproval.writwritingTimeingFile && hisList.step1.csrApproval.writwritingTimeingFile !== 'null'">
					<span>拟写招标文件</span>
					<span class="text-dark-grey">({{ hisList.step1.csrApproval.writwritingTimeingTime? hisList.step1.csrApproval.writwritingTimeingTime : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ hisList.step1.csrApproval.writwritingTimeingFile | filesNum }}个)</span>
				</div>
				<div v-if="hisList.step1.csrApproval.tenderFeedbackFile && hisList.step1.csrApproval.tenderFeedbackFile !== 'null'">
					<span>修改招标文件</span>
					<span class="text-dark-grey">({{ hisList.step1.csrApproval.feedbackTime? hisList.step1.csrApproval.feedbackTime : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ hisList.step1.csrApproval.tenderFeedbackFile | filesNum }}个)</span>
				</div>
				<div v-if="hisList.step1.csrApproval.finalTenderFile && hisList.step1.csrApproval.finalTenderFile !== 'null'">
					<span>定稿招标文件</span>
					<span class="text-dark-grey">({{ hisList.step1.csrApproval.finalTime? hisList.step1.csrApproval.finalTime : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ hisList.step1.csrApproval.finalTenderFile | filesNum }}个)</span>
				</div>
			</div>
		</div>
		<div class="pb-10">
			<span class="span-2 inline"></span>
			<span class="span-5 inline text-light-grey app-report-text">......</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['dataList'],
		computed: {
			imgUrl: function () {
				if (this.type) {
					return '../../static/img/nodata.png';
				} else {
					return '../../static/img/abnormal.png';
				}
			}
		},
		methods: {
			refreshData: function () {
				if (this.nodata !== '暂无数据') {
					this.refresh();
				}
			}
		}
	};
</script>
