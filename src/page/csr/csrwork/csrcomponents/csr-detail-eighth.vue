<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>报告发布</span>
					<span class="text-dark-grey">({{detail.csrApproval.releaseTime? detail.csrApproval.releaseTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>制作嘉宾邀请函</span>
					<span class="text-dark-grey">({{ detail.csrApproval.guestTime? detail.csrApproval.guestTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>嘉宾邀请</span>
					<span class="text-dark-grey">({{ detail.csrApproval.invitedTime? detail.csrApproval.invitedTime : "0.0" }}h)</span>
				</div>
				<div v-if="!short">
					<div>
						<span>媒体邀请</span>
						<span class="text-dark-grey">({{ detail.csrApproval.invitedTime2? detail.csrApproval.invitedTime2 : "0.0" }}h)</span>
					</div>
					<div>
						<span>举办发布</span>
						<span class="text-dark-grey">({{ detail.csrApproval.conferenceTime? detail.csrApproval.conferenceTime : "0.0" }}h)</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['detail', 'short'],
		data () {
			return {
				timeout: ''
			};
		},
		mounted () {
			// const self = this;
			// this.timeout = setTimeout(function () {
			// 	self.$store.commit('loadingHide');
			// }, 1000);
		},
		beforeDestroy () {
			// clearInterval(this.timeout);
		}
	};
</script>
