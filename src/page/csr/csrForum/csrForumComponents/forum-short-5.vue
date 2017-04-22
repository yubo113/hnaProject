<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div v-if="step.csrApproval.releaseFile && step.csrApproval.releaseFile !== 'null'">
					<span>新闻稿拟写</span>
					<span class="text-dark-grey">({{ step.csrApproval.releaseWritingConsuming? step.csrApproval.releaseWritingConsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.releaseFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.releaseFile | filesNum }}个)</span>
				</div>
				<div>
					<span>新闻稿发放</span>
					<span class="text-dark-grey">({{ step.csrApproval.releaseGrantConsuming? step.csrApproval.releaseGrantConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>传播监测</span>
					<span class="text-dark-grey">({{ step.csrApproval.spreadMonitorConsuming? step.csrApproval.spreadMonitorConsuming : "0.0" }}h)</span>
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
