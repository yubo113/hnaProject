<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>报文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.messageconsuming? detail.csrApproval.messageconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>报合同公文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.contractDocumentsconsuming? detail.csrApproval.contractDocumentsconsuming : "0.0" }}h)</span>
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
