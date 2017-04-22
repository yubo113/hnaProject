<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>选定培训合作方</span>
					<span class="text-dark-grey">({{ detail.csrApproval.whetherInquiryconsuming? detail.csrApproval.whetherInquiryconsuming : "0.0" }}h)</span>
					<span class="text-dark-grey">
						&nbsp;&nbsp;
						{{ detail.csrApproval.whetherInquiry && detail.csrApproval.whetherInquiry == '0' ? "(是多方询价)" : "(未多方询价)" }}
					</span>
				</div>
				<div>
					<span>达成合作意向</span>
					<span class="text-dark-grey">({{ detail.csrApproval.cooperationIntentionconsuming? detail.csrApproval.cooperationIntentionconsuming : "0.0" }}h)</span>
				</div>

				<div v-if="detail.csrApproval.submitPlanProFile && detail.csrApproval.submitPlanProFile !== 'null'">
					<span>拟写合作方案</span>
					<span class="text-dark-grey">({{ detail.csrApproval.submitPlanconsuming? detail.csrApproval.submitPlanconsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.submitPlanProFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.submitPlanProFile | filesNum }}个)</span>
				</div>
				<div v-if="detail.csrApproval.planModifyconsuming && detail.csrApproval.planModifyconsuming !== '0.0'">
					<span>修改合作方案</span>
					<span class="text-dark-grey">({{ detail.csrApproval.planModifyconsuming? detail.csrApproval.planModifyconsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.tenderFeedbackFil)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.submitPlanProFile | filesNum }}个)</span>
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
		},
		methods: {
			enterFileImg: function (fileName) {
				this.$store.commit('setFileList', fileName);
				this.$router.push({name: 'fileImg'});
			}
		}
	};
</script>
