<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>协调视频会场</span>
					<span class="text-dark-grey">({{ step.csrApproval.coordinateVedioroomconsuming? step.csrApproval.coordinateVedioroomconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>制定培训手册</span>
					<span class="text-dark-grey">({{ step.csrApproval.developTrainingmanualconsumin? step.csrApproval.developTrainingmanualconsumin : "0.0" }}h)</span>
				</div>
				<div>
					<span>摄影摄像</span>
					<span class="text-dark-grey">({{ step.csrApproval.cameraconsuming? step.csrApproval.cameraconsuming : "0.0" }}h)</span>
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
