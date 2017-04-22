<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div v-if="step.csrApproval.designCompanyFile && step.csrApproval.designCompanyFile !== 'null'">
					<span>材料设计公司</span>
					<span class="text-dark-grey">{{ step.csrApproval.designCompany }}</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.designCompanyFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.designCompanyFile | filesNum }}个)</span>
				</div>
    			<div>
					<span>初次设计定稿</span>
					<span class="text-dark-grey">({{ step.csrApproval.firstdesignFinalizedconsuming? step.csrApproval.firstdesignFinalizedconsuming : "0.0" }}h)</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['step'],
		data () {
			return {
			};
		},
		methods: {
			enterFileImg: function (fileName) {
				this.$store.commit('setFileList', fileName);
				this.$router.push({name: 'fileImg'});
			}
		},
		mounted () {
		},
		beforeDestroy () {
		}
	};
</script>
