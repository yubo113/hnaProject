<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>现场保障</span>
					<span class="text-dark-grey">({{ detail.csrApproval.invCoopPartnerConsuming? detail.csrApproval.invCoopPartnerConsuming : "0.0" }}h)</span>
				</div>
				<div v-if="detail.csrApproval.refineImpAgendaFile && detail.csrApproval.refineImpAgendaFile !== 'null'">
					<span>拟写新闻稿</span>
					<span class="text-dark-grey">({{ detail.csrApproval.refineImpAgendaConsuming? detail.csrApproval.refineImpAgendaConsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.refineImpAgendaFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.refineImpAgendaFile | filesNum }}个)</span>
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
