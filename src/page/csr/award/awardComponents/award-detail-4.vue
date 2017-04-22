<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">

				<div>
					<span>拟写请示公文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.cusVisionProFile? detail.csrApproval.cusVisionProFile : 0 }}h)</span>
				</div>
				<div>
					<span>呈报公文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.cusForumManualModTime? detail.csrApproval.cusForumManualModTime : 0 }}h)</span>
				</div>
				<div v-if="detail.csrApproval.activiFile && detail.csrApproval.activiFile !== 'null'">
					<span>请示公文修改</span>
					<span class="text-dark-grey">({{ detail.csrApproval.materielDesignTime? detail.csrApproval.materielDesignTime : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.activiFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.activiFile | filesNum }}个)</span>
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
