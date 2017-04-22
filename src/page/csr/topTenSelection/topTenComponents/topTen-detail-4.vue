<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>测试网上评选平台</span>
					<span class="text-dark-grey">({{ detail.csrApproval.testOnlineplatformconsuming? detail.csrApproval.testOnlineplatformconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>整理统计入选名单</span>
					<span class="text-dark-grey">({{ detail.csrApproval.sortingListconsuming? detail.csrApproval.sortingListconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>项目评分</span>
					<span class="text-dark-grey">({{ detail.csrApproval.itemRankingconsuming? detail.csrApproval.itemRankingconsuming : "0.0" }}h)</span>
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
			/*	储存地址
			 *	fileName: 文件地址
			 *	跳转页面
			 */
			enterFileImg: function (fileName) {
				this.$store.commit('setFileList', fileName);
				this.$router.push({name: 'fileImg'});
			}
		},
		mounted () {
		}
	};
</script>
