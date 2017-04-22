<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>成立项目工作组</span>
					<span class="text-dark-grey">({{ detail.csrApproval.establishProjectConsuming? detail.csrApproval.establishProjectConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>邀请合作伙伴</span>
					<span class="text-dark-grey">({{ detail.csrApproval.invCoopPartnerConsuming? detail.csrApproval.invCoopPartnerConsuming : "0.0" }}h)</span>
				</div>				
				<div>
					<span>细化执行议程</span>
					<span class="text-dark-grey">({{ detail.csrApproval.refineImpAgendaConsuming? detail.csrApproval.refineImpAgendaConsuming : "0.0" }}h)</span>
				</div>
				<div v-if="detail.csrApproval.cusForumManualFile && detail.csrApproval.cusForumManualFile !== 'null'">
					<span>制定论坛手册</span>
					<span class="text-dark-grey">({{ detail.csrApproval.cusForumManualConsuming? detail.csrApproval.cusForumManualConsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.cusForumManualFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.cusForumManualFile | filesNum }}个)</span>
				</div>
				<div v-if="detail.csrApproval.cusVisionProFile && detail.csrApproval.cusVisionProFile !== 'null'">
					<span>制定视觉设计方案</span>
					<span class="text-dark-grey">({{ detail.csrApproval.cusVisionProConsuming? detail.csrApproval.cusVisionProConsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.cusVisionProFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.cusVisionProFile | filesNum }}个)</span>
				</div>
				<div>
					<span>物料设计</span>
					<span class="text-dark-grey">({{ detail.csrApproval.materielDesignConsuming? detail.csrApproval.materielDesignConsuming : "0.0" }}h)</span>
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
