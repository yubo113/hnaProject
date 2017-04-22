<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>成立工作组</span>
					<span class="text-dark-grey">{{ step.csrApproval.establishproject }}</span>
				</div>
    			<div>
					<span>成立耗时</span>
					<span class="text-dark-grey">({{ step.csrApproval.establishprojectconsuming? step.csrApproval.establishprojectconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>策划责任人</span>
					<span class="text-dark-grey">{{ step.csrApproval.planperson }}</span>
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
