<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>责任人员</span>
					<span class="text-dark-grey">{{ detail.csrApproval.distingperson }}</span>
				</div>
    			<div>
					<span>起草邀请函</span>
					<span class="text-dark-grey">({{ detail.csrApproval.draftinvitationconsuming? detail.csrApproval.draftinvitationconsuming : "0.0" }}h)</span>
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
