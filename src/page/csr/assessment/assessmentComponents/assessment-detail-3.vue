<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>呈报公文</span>
					<span class="text-dark-grey">{{ detail.csrApproval.reportDoc }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ detail.csrApproval.reportDocConsuming? detail.csrApproval.reportDocConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>公文获批</span>
					<span class="text-dark-grey">({{ detail.csrApproval.approvedDocConsuming? detail.csrApproval.approvedDocConsuming : "0.0" }}h)</span>
				</div>
				<div v-if="detail.csrApproval.reportDocFile && detail.csrApproval.reportDocFile !== 'null'">
					<span>下发邮件</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.reportDocFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.reportDocFile | filesNum }}个)</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['detail'],
		data () {
			return {};
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
		}
	};
</script>
