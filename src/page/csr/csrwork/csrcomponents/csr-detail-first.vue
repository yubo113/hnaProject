<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div v-if="detail.csrApproval.writwritingTimeingFile && detail.csrApproval.writwritingTimeingFile !== 'null'">
					<span>拟写招标文件</span>
					<span class="text-dark-grey">({{ detail.csrApproval.writwritingTimeingTime? detail.csrApproval.writwritingTimeingTime : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.writwritingTimeingFile | filesNum }}个)</span>
				</div>
				<div v-if="detail.csrApproval.tenderFeedbackFile && detail.csrApproval.tenderFeedbackFile !== 'null'">
					<span>修改招标文件</span>
					<span class="text-dark-grey">({{ detail.csrApproval.feedbackTime? detail.csrApproval.feedbackTime : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.tenderFeedbackFile | filesNum }}个)</span>
				</div>
				<div v-if="detail.csrApproval.finalTenderFile && detail.csrApproval.finalTenderFile !== 'null'">
					<span>定稿招标文件</span>
					<span class="text-dark-grey">({{ detail.csrApproval.finalTime? detail.csrApproval.finalTime : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.finalTenderFile | filesNum }}个)</span>
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
		mounted () {
			// const self = this;
			// this.timeout = setTimeout(function () {
			// 	self.$store.commit('loadingHide');
			// }, 1000);
		},
		beforeDestroy () {
			// console.log('this is de');
			// clearTimeout(this.timeout);
			// console.log(this.timeout);
		}
	};
</script>
