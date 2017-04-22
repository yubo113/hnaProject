<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div v-if="detail.csrApproval.emailDesignFile && detail.csrApproval.emailDesignFile !== 'null'">
					<span>月刊邮件版面设计</span>
					<span class="text-dark-grey">({{ detail.csrApproval.emailDesignConsuming? detail.csrApproval.emailDesignConsuming : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.emailDesignFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.emailDesignFile | filesNum }}个)</span>
				</div>

				<div v-if="detail.csrApproval.pageDesignModifyNumber && detail.csrApproval.pageDesignModifyNumber > 0 " >
					<span>版面设计反馈修改</span>
					<span class="text-dark-grey">({{ detail.csrApproval.pageDesignModiConsuming? detail.csrApproval.pageDesignModiConsuming : '0.0' }}h)</span>
					<span class="text-dark-grey">
						&nbsp;&nbsp;
						({{ detail.csrApproval.pageDesignModifyNumber? detail.csrApproval.pageDesignModifyNumber : "0" }}次)
					</span>
				</div>
				<div v-if="detail.csrApproval.monthProofreadingFile && detail.csrApproval.monthProofreadingFile !== 'null'">
					<span>月刊校对</span>
					<span class="text-dark-grey">({{ detail.csrApproval.monthProoConsuming? detail.csrApproval.monthProoConsuming : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.monthProofreadingFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.monthProofreadingFile | filesNum }}个)</span>
				</div>
				<div v-if="detail.csrApproval.monthProoNumber && detail.csrApproval.monthProoNumber > 0 " >
					<span>月刊校对次数</span>
					<span class="text-dark-grey">
						&nbsp;&nbsp;
						({{ detail.csrApproval.monthProoNumber? detail.csrApproval.monthProoNumber : "0" }}次)
					</span>
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
			enterFileImg: function (fileName) {
				this.$store.commit('setFileList', fileName);
				this.$router.push({name: 'fileImg'});
			}
		}
	};
</script>
