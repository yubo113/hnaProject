<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>呈送活动动态</span>
					<span class="text-dark-grey">({{ detail.csrApproval.audioVideoConsuming? detail.csrApproval.audioVideoConsuming : 0 }}h)</span>
				</div>
				<div>
					<span>活动后续工作跟进</span>
					<span class="text-dark-grey">({{ detail.csrApproval.photoCameraConsuming? detail.csrApproval.photoCameraConsuming : 0 }}h)</span>
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
