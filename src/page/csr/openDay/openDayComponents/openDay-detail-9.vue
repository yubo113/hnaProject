<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>集团动态</span>
					<span class="text-dark-grey">{{ detail.csrApproval.releasedynamic }}</span>
				</div>
    			<div>
					<span>活动完成</span>
					<span class="text-dark-grey">({{ detail.csrApproval.activitycostconsuming? detail.csrApproval.activitycostconsuming : "0.0" }}h)</span>
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
