<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span v-if="step.csrApproval.emailDesignFile && step.csrApproval.emailDesignFile !== 'null'">月刊邮件版面设计</span>
					<span class="text-dark-grey">({{ step.csrApproval.emailDesignConsuming? step.csrApproval.emailDesignConsuming : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.emailDesignFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.emailDesignFile | filesNum }}个)</span>
				</div>

				<div v-if="step.csrApproval.pageDesignModifyNumber && step.csrApproval.pageDesignModifyNumber > 0 " >
					<span>版面设计反馈修改</span>
					<span class="text-dark-grey">({{ step.csrApproval.pageDesignModiConsuming? step.csrApproval.pageDesignModiConsuming : '0.0' }}h)</span>
					<span class="text-dark-grey">
						&nbsp;&nbsp;
						({{ step.csrApproval.pageDesignModifyNumber? step.csrApproval.pageDesignModifyNumber : "0" }}次)
					</span>
				</div>
				<div v-if="step.csrApproval.monthProofreadingFile && step.csrApproval.monthProofreadingFile !== 'null'">
					<span>月刊校对</span>
					<span class="text-dark-grey">({{ step.csrApproval.monthProoConsuming? step.csrApproval.monthProoConsuming : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.monthProofreadingFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.monthProofreadingFile | filesNum }}个)</span>
				</div>
				<div v-if="step.csrApproval.monthProoNumber && step.csrApproval.monthProoNumber > 0 " >
					<span>月刊校对次数</span>
					<span class="text-dark-grey">
						&nbsp;&nbsp;
						({{ step.csrApproval.monthProoNumber? step.csrApproval.monthProoNumber : "0" }}次)
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['step'],
		data () {
			return {
			};
		},
		methods: {
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
