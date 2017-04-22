<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">

				<div>
					<span>调研总结</span>
					<span class="text-dark-grey">{{ step.csrApproval.writResearchSummary }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ step.csrApproval.writResearchConsuming? step.csrApproval.writResearchConsuming : "0.0" }}h)</span>
				</div>
				<div v-if="step.csrApproval.writResearchSummaryFile && step.csrApproval.writResearchSummaryFile !== 'null'">
					<span>总结定稿</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.writResearchSummaryFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.writResearchSummaryFile | filesNum }}个)</span>
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

