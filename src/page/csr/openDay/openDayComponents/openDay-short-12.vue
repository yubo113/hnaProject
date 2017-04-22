<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>邀请媒体</span>
					<span class="text-dark-grey">{{ step.csrApproval.invitationmedia }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ step.csrApproval.invitationmediaconsuming? step.csrApproval.invitationmediaconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>拟参会媒体名单</span>
					<span class="text-dark-grey">({{ step.csrApproval.parmedialistnumber? step.csrApproval.parmedialistnumber : "0.0" }}h)</span>
				</div>
				<div>
					<span>制定传播方案</span>
					<span class="text-dark-grey">({{ step.csrApproval.forspreadprogconsuming? step.csrApproval.forspreadprogconsuming : "0.0" }}h)</span>
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
