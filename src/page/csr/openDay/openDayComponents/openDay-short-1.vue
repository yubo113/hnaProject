<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>拟写方案</span>
					<span class="text-dark-grey">{{ step.csrApproval.writingpro }}</span>
				</div>
				<div>
					<span>方案耗时</span>
					<span class="text-dark-grey">({{ step.csrApproval.writingproconsuming? step.csrApproval.writingproconsuming : "0.0" }}h)</span>
				</div>					
				<div v-if="step.csrApproval.writingprofile && step.csrApproval.writingprofile !== 'null'">
					<span>部门完成方案审核</span>
					<span class="text-dark-grey">({{ step.csrApproval.depproexamineconsuming? step.csrApproval.depproexamineconsuming : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.writingprofile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.writingprofile | filesNum }}个)</span>
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
