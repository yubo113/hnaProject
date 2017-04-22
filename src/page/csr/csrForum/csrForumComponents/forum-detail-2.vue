<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				
				<div v-if="detail.csrApproval.draftForumWholeFile && detail.csrApproval.draftForumWholeFile !== 'null'">
					<span>起草论坛整体方案</span>
					<span class="text-dark-grey">({{ detail.csrApproval.draftForumWholeConsuming? detail.csrApproval.draftForumWholeConsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.draftForumWholeFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.draftForumWholeFile | filesNum }}个)</span>
				</div>
				<div>
					<span>部门总经理汇报</span>
					<span class="text-dark-grey">({{ detail.csrApproval.depMangerConsuming? detail.csrApproval.depMangerConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>部门总经理签批</span>
					<span class="text-dark-grey">({{ detail.csrApproval.depMangerSignConsuming? detail.csrApproval.depMangerSignConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>分管领导签批</span>
					<span class="text-dark-grey">({{ detail.csrApproval.chargeLeaderSignConsuming? detail.csrApproval.chargeLeaderSignConsuming : "0.0" }}h)</span>
				</div>				
				<div>
					<span>报文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.packetTimeConsuming? detail.csrApproval.packetTimeConsuming : "0.0" }}h)</span>
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
