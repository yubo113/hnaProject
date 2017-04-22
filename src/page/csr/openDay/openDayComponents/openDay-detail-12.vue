<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>邀请媒体</span>
					<span class="text-dark-grey">{{ detail.csrApproval.invitationmedia }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ detail.csrApproval.invitationmediaconsuming? detail.csrApproval.invitationmediaconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>拟参会媒体名单</span>
					<span class="text-dark-grey">({{ detail.csrApproval.parmedialistnumber? detail.csrApproval.parmedialistnumber : "0.0" }}h)</span>
				</div>
				<div>
					<span>制定传播方案</span>
					<span class="text-dark-grey">({{ detail.csrApproval.forspreadprogconsuming? detail.csrApproval.forspreadprogconsuming : "0.0" }}h)</span>
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
