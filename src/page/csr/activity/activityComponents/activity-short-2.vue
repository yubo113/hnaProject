<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>准备领导参考材料</span>
					<span class="text-dark-grey">({{ step.csrApproval.referenceDataConsuming? step.csrApproval.referenceDataConsuming : 0 }}h)</span>
				</div>
				<div>
					<span>主办方沟通参会细节</span>
					<span class="text-dark-grey">({{ step.csrApproval.sponsorCommunicationTime? step.csrApproval.sponsorCommunicationTime : 0 }}h)</span>
				</div>
				<div>
					<span>准备参会材料</span>
					<span class="text-dark-grey">({{ step.csrApproval.depMangerSignConsuming? step.csrApproval.depMangerSignConsuming : 0 }}h)</span>
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
