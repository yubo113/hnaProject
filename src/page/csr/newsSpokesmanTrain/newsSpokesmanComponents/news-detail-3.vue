<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>与合作方沟通培训细节</span>
					<span class="text-dark-grey">({{ detail.csrApproval.partnerDetailsconsuming? detail.csrApproval.partnerDetailsconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>下发培训通知</span>
					<span class="text-dark-grey">({{ detail.csrApproval.issuedNoticeconsuming? detail.csrApproval.issuedNoticeconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>统计培训人员</span>
					<span class="text-dark-grey">({{ detail.csrApproval.statisticalPersonnelconsuming? detail.csrApproval.statisticalPersonnelconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>统计外地人员</span>
					<span class="text-dark-grey">({{ detail.csrApproval.statisticalFieldstaffconsumin? detail.csrApproval.statisticalFieldstaffconsumin : "0.0" }}h)</span>
				</div>
				<div>
					<span>酒店预订</span>
					<span class="text-dark-grey">({{ detail.csrApproval.hotelBookingconsuming? detail.csrApproval.hotelBookingconsuming : "0.0" }}h)</span>
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
			/*	储存地址
			 *	fileName: 文件地址
			 *	跳转页面
			 */
			enterFileImg: function (fileName) {
				this.$store.commit('setFileList', fileName);
				this.$router.push({name: 'fileImg'});
			}
		}
	};
</script>
