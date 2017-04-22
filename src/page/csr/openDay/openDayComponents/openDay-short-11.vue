<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>邀请人员</span>
					<span class="text-dark-grey">{{ step.csrApproval.inviteguests }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ step.csrApproval.inviteguestsconsuming? step.csrApproval.inviteguestsconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>预定酒店</span>
					<span class="text-dark-grey">{{ step.csrApproval.reservehoteltime }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ step.csrApproval.reservehotelconsuming? step.csrApproval.reservehotelconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>机票预订</span>
					<span class="text-dark-grey">{{ step.csrApproval.reservetickettime }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ step.csrApproval.reserveticketconsuming? step.csrApproval.reserveticketconsuming : "0.0" }}h)</span>
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
