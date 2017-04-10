<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>协调视频会场</span>
					<span class="text-dark-grey">({{ detail.csrApproval.coordinateVedioroomconsuming? detail.csrApproval.coordinateVedioroomconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>制定培训手册</span>
					<span class="text-dark-grey">({{ detail.csrApproval.developTrainingmanualconsumin? detail.csrApproval.developTrainingmanualconsumin : "0.0" }}h)</span>
				</div>
				<div>
					<span>摄影摄像</span>
					<span class="text-dark-grey">({{ detail.csrApproval.cameraconsuming? detail.csrApproval.cameraconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>现场保障</span>
					<span class="text-dark-grey">({{ detail.csrApproval.sceneSecurityconsuming? detail.csrApproval.sceneSecurityconsuming : "0.0" }}h)</span>
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
