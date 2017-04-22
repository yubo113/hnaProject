<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">

				<div>
					<span>调研总结</span>
					<span class="text-dark-grey">{{ detail.csrApproval.writResearchSummary }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ detail.csrApproval.writResearchConsuming? detail.csrApproval.writResearchConsuming : "0.0" }}h)</span>
				</div>
				<div v-if="detail.csrApproval.writResearchSummaryFile && detail.csrApproval.writResearchSummaryFile !== 'null'">
					<span>总结定稿</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.writResearchSummaryFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.writResearchSummaryFile | filesNum }}个)</span>
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

