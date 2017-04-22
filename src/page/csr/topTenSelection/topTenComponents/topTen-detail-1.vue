<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div v-if="detail.csrApproval.makeProtocolFile && detail.csrApproval.makeProtocolFile !== 'null'">
					<span>拟写方案</span>
					<span class="text-dark-grey">({{ detail.csrApproval.makeProtocolconsuming? detail.csrApproval.makeProtocolconsuming : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.makeProtocolFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.makeProtocolFile | filesNum }}个)</span>
				</div>				
				<div>
					<span>部门完成方案审核</span>
					<span class="text-dark-grey">({{ detail.csrApproval.completeAuditconsuming? detail.csrApproval.completeAuditconsuming : "0.0" }}h)</span>
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
