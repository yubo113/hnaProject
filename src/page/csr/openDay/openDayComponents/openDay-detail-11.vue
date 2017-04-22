<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>邀请人员</span>
					<span class="text-dark-grey">{{ detail.csrApproval.inviteguests }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ detail.csrApproval.inviteguestsconsuming? detail.csrApproval.inviteguestsconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>预定酒店</span>
					<span class="text-dark-grey">{{ detail.csrApproval.reservehoteltime }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ detail.csrApproval.reservehotelconsuming? detail.csrApproval.reservehotelconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>机票预订</span>
					<span class="text-dark-grey">{{ detail.csrApproval.reservetickettime }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ detail.csrApproval.reserveticketconsuming? detail.csrApproval.reserveticketconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>预订车辆</span>
					<span class="text-dark-grey">{{ detail.csrApproval.reservevehicle }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ detail.csrApproval.reservevehicleconsuming? detail.csrApproval.reservevehicleconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>餐食预订</span>
					<span class="text-dark-grey">{{ detail.csrApproval.reservemeals }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ detail.csrApproval.reservemealsconsuming? detail.csrApproval.reservemealsconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>准备礼品</span>
					<span class="text-dark-grey">{{ detail.csrApproval.readygift }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ detail.csrApproval.readygiftconsuming? detail.csrApproval.readygiftconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>预订会议室</span>
					<span class="text-dark-grey">{{ detail.csrApproval.reservecroom }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ detail.csrApproval.reservecroomconsuming? detail.csrApproval.reservecroomconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>媒体组责任人</span>
					<span class="text-dark-grey">{{ detail.csrApproval.mediaresponsibilitypreon }}</span>
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
