<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>主办方</span>
					<span class="text-dark-grey">{{ detail.csrApproval.sponsor }}</span>
				</div>
				<div>
					<span>部门评估</span>
					<span class="text-dark-grey">({{ detail.csrApproval.sectorAssessmentConsuming? detail.csrApproval.sectorAssessmentConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>报文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.depMangerTime? detail.csrApproval.depMangerTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>确定参加领导</span>
					<span class="text-dark-grey">({{ detail.csrApproval.joinLeaderConsuming? detail.csrApproval.joinLeaderConsuming : "0.0" }}h)</span>
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
