<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div v-if="detail.csrApproval.goodprojectBgfFile && detail.csrApproval.goodprojectBgfFile !== 'null'">
					<span>整理优秀项目整编</span>
					<span class="text-dark-grey">({{ detail.csrApproval.goodprojectBgfconsuming? detail.csrApproval.goodprojectBgfconsuming : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.goodprojectBgfFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.goodprojectBgfFile | filesNum }}个)</span>
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
