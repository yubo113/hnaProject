<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>呈报公文</span>
					<span class="text-dark-grey">{{ detail.csrApproval.reportDocument }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ detail.csrApproval.reportDocuConsuming? detail.csrApproval.reportDocuConsuming : "0.0" }}h)</span>
				</div>
				<div v-if="detail.csrApproval.reportDocumentFile && detail.csrApproval.reportDocumentFile !== 'null'">
					<span>网上发文</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.reportDocumentFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.reportDocumentFile | filesNum }}个)</span>
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
