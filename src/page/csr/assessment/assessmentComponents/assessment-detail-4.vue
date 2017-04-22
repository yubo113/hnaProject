<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>制定方案</span>
					<span class="text-dark-grey">{{ detail.csrApproval.forDetResearch }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ detail.csrApproval.progModifyConsuming? detail.csrApproval.progModifyConsuming : "0.0" }}h)</span>
				</div>
				<div v-if="detail.csrApproval.forDetResearchFile && detail.csrApproval.forDetResearchFile !== 'null'">
					<span>方案定稿</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.forDetResearchFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.forDetResearchFile | filesNum }}个)</span>
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
