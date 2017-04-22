<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div v-if="detail.csrApproval.bgfplanFormuFile && detail.csrApproval.bgfplanFormuFile !== 'null'">
					<span>制定整编传播方案</span>
					<span class="text-dark-grey">({{ detail.csrApproval.bgfplanFormulationconsuming? detail.csrApproval.bgfplanFormulationconsuming : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.bgfplanFormuFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.bgfplanFormuFile | filesNum }}个)</span>
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
