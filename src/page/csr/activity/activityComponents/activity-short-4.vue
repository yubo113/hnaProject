<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">

				<div>
					<span>发放新闻稿</span>
					<span class="text-dark-grey">({{ step.csrApproval.cusVisionProFile? step.csrApproval.cusVisionProFile : 0 }}h)</span>
				</div>
				<div>
					<span>集团新媒体传播</span>
					<span class="text-dark-grey">({{ step.csrApproval.cusForumManualModTime? step.csrApproval.cusForumManualModTime : 0 }}h)</span>
				</div>
				<div v-if="step.csrApproval.activiFile && step.csrApproval.activiFile !== 'null'">
					<span>拟写活动动态</span>
					<span class="text-dark-grey">({{ step.csrApproval.materielDesignTime? step.csrApproval.materielDesignTime : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.activiFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.activiFile | filesNum }}个)</span>
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
