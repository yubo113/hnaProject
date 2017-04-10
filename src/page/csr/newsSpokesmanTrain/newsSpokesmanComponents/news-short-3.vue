<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>与合作方沟通培训细节</span>
					<span class="text-dark-grey">({{ step.csrApproval.partnerDetailsconsuming? step.csrApproval.partnerDetailsconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>下发培训通知</span>
					<span class="text-dark-grey">({{ step.csrApproval.issuedNoticeconsuming? step.csrApproval.issuedNoticeconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>统计培训人员</span>
					<span class="text-dark-grey">({{ step.csrApproval.statisticalPersonnelconsuming? step.csrApproval.statisticalPersonnelconsuming : "0.0" }}h)</span>
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
