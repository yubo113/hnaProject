<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">

				<div>
					<span>签到/学分统计</span>
					<span class="text-dark-grey">({{ detail.csrApproval.signStatisticsconsuming? detail.csrApproval.signStatisticsconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>培训情况通报</span>
					<span class="text-dark-grey">({{ detail.csrApproval.trainingNotificationconsuming? detail.csrApproval.trainingNotificationconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>协调各地考场/监考</span>
					<span class="text-dark-grey">({{ detail.csrApproval.eventCoordinatorconsuming? detail.csrApproval.eventCoordinatorconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>批阅考卷</span>
					<span class="text-dark-grey">({{ detail.csrApproval.examinesPapersconsuming? detail.csrApproval.examinesPapersconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>考试结果通报</span>
					<span class="text-dark-grey">({{ detail.csrApproval.examinesResultconsuming? detail.csrApproval.examinesResultconsuming : "0.0" }}h)</span>
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
