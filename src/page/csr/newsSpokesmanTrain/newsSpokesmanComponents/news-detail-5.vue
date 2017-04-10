<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>拟写活动动态</span>
					<span class="text-dark-grey">({{ detail.csrApproval.writingActivitiesconsuming? detail.csrApproval.writingActivitiesconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>定稿活动动态</span>
					<span class="text-dark-grey">({{ detail.csrApproval.finalizedActivitydynamicconsu? detail.csrApproval.finalizedActivitydynamicconsu : "0.0" }}h)</span>
				</div>
				<div>
					<span>呈送活动动态</span>
					<span class="text-dark-grey">({{ detail.csrApproval.presentedActivitydynamicconsu? detail.csrApproval.presentedActivitydynamicconsu : "0.0" }}h)</span>
				</div>
				<div>
					<span>签到统计</span>
					<span class="text-dark-grey">({{ detail.csrApproval.signStatisticsconsuming? detail.csrApproval.signStatisticsconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>培训情况通报</span>
					<span class="text-dark-grey">({{ detail.csrApproval.trainingNotificationconsuming? detail.csrApproval.trainingNotificationconsuming : "0.0" }}h)</span>
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
		},
		beforeDestroy () {
		}
	};
</script>
