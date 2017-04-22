<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>签到/学分统计</span>
					<span class="text-dark-grey">({{ step.csrApproval.signStatisticsconsuming? step.csrApproval.signStatisticsconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>培训情况通报</span>
					<span class="text-dark-grey">({{ step.csrApproval.trainingNotificationconsuming? step.csrApproval.trainingNotificationconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>协调各地考场/监考</span>
					<span class="text-dark-grey">({{ step.csrApproval.eventCoordinatorconsuming? step.csrApproval.eventCoordinatorconsuming : "0.0" }}h)</span>
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
