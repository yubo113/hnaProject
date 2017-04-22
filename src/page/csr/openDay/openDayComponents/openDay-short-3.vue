<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>呈报公文耗时</span>
					<span class="text-dark-grey">({{ step.csrApproval.reportdocumentconsuming? step.csrApproval.reportdocumentconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span> 拟写邮件通知</span>
					<span class="text-dark-grey">({{ step.csrApproval.documentapprovedconsuming? step.csrApproval.documentapprovedconsuming : "0.0" }}h)</span>
				</div>
				<div v-if="step.csrApproval.reportdocumentfile && step.csrApproval.reportdocumentfile !== 'null'">
					<span> 下发邮件</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.reportdocumentfile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.reportdocumentfile | filesNum }}个)</span>
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
