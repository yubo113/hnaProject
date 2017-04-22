<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>制定绿色会议标准</span>
					<span class="text-dark-grey">({{ step.csrApproval.forGreenMeetingConsuming? step.csrApproval.forGreenMeetingConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>现场舞台搭建</span>
					<span class="text-dark-grey">({{ step.csrApproval.stageBuildConsuming? step.csrApproval.stageBuildConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>音像设备保障</span>
					<span class="text-dark-grey">({{ step.csrApproval.audioVideoConsuming? step.csrApproval.audioVideoConsuming : "0.0" }}h)</span>
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
