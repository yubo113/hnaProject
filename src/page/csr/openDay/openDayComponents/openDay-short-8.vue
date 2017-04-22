<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>集团动态</span>
					<span class="text-dark-grey">{{ step.csrApproval.writingdynamic }}</span>
				</div>
				<div>
					<span>耗时</span>
					<span class="text-dark-grey">({{ step.csrApproval.writingdynamicconsuming? step.csrApproval.writingdynamicconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>提交方案</span>
					<span class="text-dark-grey">({{ step.csrApproval.submitcoopproconsuming? step.csrApproval.submitcoopproconsuming : "0.0" }}h)</span>
				</div>

    			<div v-if="step.csrApproval.writingdynamicfile && step.csrApproval.writingdynamicfile !== 'null'">
					<span>拟写定稿</span>
					<span class="text-dark-grey">({{ step.csrApproval.writinggrdyfinalconsuming? step.csrApproval.writinggrdyfinalconsuming : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.writingdynamicfile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.writingdynamicfile | filesNum }}个)</span>
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
