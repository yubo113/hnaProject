<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">

				<div>
					<span>准备领导参考材料</span>
					<span class="text-dark-grey">({{ detail.csrApproval.referenceDataConsuming? detail.csrApproval.referenceDataConsuming : 0 }}h)</span>
				</div>
				<div>
					<span>主办方沟通参会细节</span>
					<span class="text-dark-grey">({{ detail.csrApproval.sponsorCommunicationTime? detail.csrApproval.sponsorCommunicationTime : 0 }}h)</span>
				</div>
				<div>
					<span>准备参会材料</span>
					<span class="text-dark-grey">({{ detail.csrApproval.depMangerSignConsuming? detail.csrApproval.depMangerSignConsuming : 0 }}h)</span>
				</div>
				<div v-if="detail.csrApproval.chargeLeaderFile && detail.csrApproval.chargeLeaderFile !== 'null'">
					<span>准备领导发言材料</span>
					<span class="text-dark-grey">({{ detail.csrApproval.chargeLeaderSignConsuming? detail.csrApproval.chargeLeaderSignConsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.chargeLeaderFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.chargeLeaderFile | filesNum }}个)</span>
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
