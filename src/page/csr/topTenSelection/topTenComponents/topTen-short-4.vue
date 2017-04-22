<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>测试网上评选平台</span>
					<span class="text-dark-grey">({{ step.csrApproval.testOnlineplatformconsuming? step.csrApproval.testOnlineplatformconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>整理统计入选名单</span>
					<span class="text-dark-grey">({{ step.csrApproval.sortingListconsuming? step.csrApproval.sortingListconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>项目评分</span>
					<span class="text-dark-grey">({{ step.csrApproval.itemRankingconsuming? step.csrApproval.itemRankingconsuming : "0.0" }}h)</span>
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
