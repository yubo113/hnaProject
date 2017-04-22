<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div v-if="detail.csrApproval.designCompanyFile && detail.csrApproval.designCompanyFile !== 'null'">
					<span>材料设计公司</span>
					<span class="text-dark-grey">{{ detail.csrApproval.designCompany }}</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.designCompanyFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.designCompanyFile | filesNum }}个)</span>
				</div>
    			<div>
					<span>初次设计定稿</span>
					<span class="text-dark-grey">({{ detail.csrApproval.firstdesignFinalizedconsuming? detail.csrApproval.firstdesignFinalizedconsuming : "0.0" }}h)</span>
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
		}
	};
</script>
