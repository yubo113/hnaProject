<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>制定方案</span>
					<span class="text-dark-grey">{{ step.csrApproval.forDetResearch }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ step.csrApproval.progModifyConsuming? step.csrApproval.progModifyConsuming : "0.0" }}h)</span>
				</div>
				<div v-if="step.csrApproval.forDetResearchFile && step.csrApproval.forDetResearchFile !== 'null'">
					<span>方案定稿</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.forDetResearchFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.forDetResearchFile | filesNum }}个)</span>
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
