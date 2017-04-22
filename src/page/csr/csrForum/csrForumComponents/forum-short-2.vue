<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div v-if="step.csrApproval.draftForumWholeFile && step.csrApproval.draftForumWholeFile !== 'null'">
					<span>起草论坛整体方案</span>
					<span class="text-dark-grey">({{ step.csrApproval.draftForumWholeConsuming? step.csrApproval.draftForumWholeConsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.draftForumWholeFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.draftForumWholeFile | filesNum }}个)</span>
				</div>
				<div>
					<span>部门总经理汇报</span>
					<span class="text-dark-grey">({{ step.csrApproval.depMangerConsuming? step.csrApproval.depMangerConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>部门总经理签批</span>
					<span class="text-dark-grey">({{ step.csrApproval.depMangerSignConsuming? step.csrApproval.depMangerSignConsuming : "0.0" }}h)</span>
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
