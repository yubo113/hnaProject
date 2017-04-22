<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div v-if="detail.csrApproval.releaseFile && detail.csrApproval.releaseFile !== 'null'">
					<span>新闻稿拟写</span>
					<span class="text-dark-grey">({{ detail.csrApproval.releaseWritingConsuming? detail.csrApproval.releaseWritingConsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.releaseFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.releaseFile | filesNum }}个)</span>
				</div>
				<div>
					<span>新闻稿发放</span>
					<span class="text-dark-grey">({{ detail.csrApproval.releaseGrantConsuming? detail.csrApproval.releaseGrantConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>传播监测</span>
					<span class="text-dark-grey">({{ detail.csrApproval.spreadMonitorConsuming? detail.csrApproval.spreadMonitorConsuming : "0.0" }}h)</span>
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
