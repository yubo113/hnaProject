<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>责任人员</span>
					<span class="text-dark-grey">{{ step.csrApproval.distingperson }}</span>
				</div>
    			<div>
					<span>起草邀请函</span>
					<span class="text-dark-grey">({{ step.csrApproval.draftinvitationconsuming? step.csrApproval.draftinvitationconsuming : "0.0" }}h)</span>
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
